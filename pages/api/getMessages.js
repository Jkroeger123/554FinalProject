import db, {auth} from '../../utils/db';

export default async (req, res) => {
  
    let {idToken} = req.body;

    try
    {
        auth.verifyIdToken(idToken)
        .then( async (decodedToken) => {
            const uid = decodedToken.uid;

            let user = await db.collection('users').doc(uid).get();
            let conversations = user.get("conversations");

            if(!conversations) conversations = [];

            //Iterate and merge each conversation
            let mergedConversations = await Promise.all(conversations.map(async (c) => {
                let other = await db.collection("users").doc(c.recepient).get();
                let conversations = other.get("conversations");

                if(!conversations) conversations = [];

                let convo = conversations.find(convo => convo.recepient == uid);
                let allMessages = [...c.messages, ...convo.messages];
                allMessages.sort((m1, m2) => {
                    return m1.time.toDate() - m2.time.toDate()
                });
                c.messages = allMessages;
                return c;
            }));

           
            res.status(200).json(mergedConversations);
        })
        .catch((error) => {
            res.status(400).end();
            console.log(error)
        });
    } catch(e) {
        console.log(e)
        res.status(400).end();
    }
    
}