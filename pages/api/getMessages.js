import db, {auth} from '../../utils/db';

export default async (req, res) => {
  
    let {idToken, id} = req.body;

    try
    {
        auth.verifyIdToken(idToken)
        .then( async (decodedToken) => {
            const uid = decodedToken.uid;

            //Get the user's conversation document
            let user = await db.collection('users').doc(uid).get();
            let conversations = user.get("conversations");

            if(!conversations) conversations = [];

            //Find the conversation with the given user
            let conversation = conversations.find(c => c.recepient == id);

            if(!conversation){
                return res.status(404).json({message: 'conversation not found'});
            }

            //Find and merge the recepients conversation messages
            let other = await db.collection("users").doc(conversation.recepient).get();
            let otherConversations = other.get("conversations");
            let photoURL = other.get("photoURL");
            let displayName = other.get("displayName");

            if(!otherConversations) otherConversations = [];

            let convo = otherConversations.find(convo => convo.recepient == uid);
            let allMessages = [...conversation.messages, ...convo.messages];
            allMessages.sort((m1, m2) => {
                return m1.time.toDate() - m2.time.toDate()
            });

            conversation.messages = allMessages;
           
            res.status(200).json({...conversation, displayName, photoURL});
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