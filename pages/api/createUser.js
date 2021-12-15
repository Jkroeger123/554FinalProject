import db, {auth} from '../../Utils/db';

export default async (req, res) => {
  
    let {idToken, user} = req.body;

    try
    {
        auth.verifyIdToken(idToken)
        .then( async (decodedToken) => {

            const uid = decodedToken.uid;

            //Trying to make an account that is not their own
            if(user.uid != uid) return res.status(401);

            let userDoc = await db.collection('users').doc(uid).get();

            //End request if the account exists
            if(userDoc.data()) return res.status(200).json(userDoc.data());

            //Otherwise, create and return the account
            let newUser = {
                uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                conversations: [],
                school: "",
                listings: [],
                favoriteListings: []
            };

            
            await db.collection('users').doc(uid).set(newUser);

            let userData = (await db.collection('users').doc(uid).get()).data();

            res.status(200).json(userData);
        })
        .catch((error) => {
            console.log(error)
            res.status(400).end();
        });
    } catch(e) {
        console.log(e)
        res.status(400).end();
    }
    
}