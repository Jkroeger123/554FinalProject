import db, {auth} from '../../Utils/db';

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

            //Iterate and map each conversation
            conversations = await Promise.all(conversations.map(async (c) => {

                let other = await db.collection("users").doc(c.recepient).get();
                let conversations = other.get("conversations");
                let photoURL = other.get("photoURL");
                let displayName = other.get("displayName");

                if(!conversations) conversations = [];

                let convo = conversations.find(convo => convo.recepient == uid);
                if(!convo) return {recepient: c.recepient, lastMessage: {}, photoURL, displayName};

                let allMessages = [...c.messages, ...convo.messages];
                allMessages.sort((m1, m2) => {
                    return m1.time.toDate() - m2.time.toDate()
                });

                c.messages = allMessages;
                
                return {recepient: c.recepient, lastMessage: c.messages[c.messages.length - 1], photoURL, displayName};
            }));

            res.status(200).json(conversations);
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