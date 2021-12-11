import db, {auth} from '../../utils/db';
import {firestore} from 'firebase-admin';

export default async (req, res) => {
    
    let {idToken, message} = req.body;

    try
    {
        auth.verifyIdToken(idToken)
        .then( async (decodedToken) => {
            const uid = decodedToken.uid;

            //Get User Document
            const userRef =  await db.collection('users').doc(uid).get();

            //Get the conversations array
            let conversations = await userRef.get("conversations");
            
            //Create conversations array if it doesnt exist
            if(!conversations) conversations = [];

            //TODO: search through the array and update the message in the correct conversation
            let found = false;
            let newConversations = conversations.map((c) => {
                if(c.recepient != message.recepient) return c;
                found = true;
                c.messages = [...c.messages, {...message, time: firestore.Timestamp.fromDate(new Date())}];
                return c;
            })

            //Create the conversation if it was not found
            if (!found){
                conversations.push({recepient: message.recepient, messages: [{recepient: message.recepient, message: message.message, time: firestore.Timestamp.fromDate(new Date())}]})
            }

            //Check Recepient DB and creatae conversation entry if it does not exist
            let otherUser = await db.collection('users').doc(message.recepient).get();
            let otherConversations = await otherUser.get("conversations");

            if(!otherConversations) otherConversations = [];
            let foundConvo = otherConversations.find(c => c.recepient == uid);
            if(!foundConvo) otherConversations.push({recepient: uid, messages: []})

            //Update other
            await db.collection('users').doc(message.recepient).update({conversations: otherConversations});


            //Update Document
            let updateDoc = await db.collection('users').doc(uid).update({ conversations: newConversations });

            //Fetch and send the updated document
            res.status(200).json(updateDoc);
        })
        .catch((error) => {
            console.log(error)
            res.status(400).end();
        });
    } catch(e) {
        res.status(400).end();
    }
    
}