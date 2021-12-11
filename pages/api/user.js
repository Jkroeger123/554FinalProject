import db, {auth} from '../../utils/db';

export default async (req, res) => {
  
    let {idToken} = req.body;

    try
    {
        auth.verifyIdToken(idToken)
        .then( async (decodedToken) => {

            const uid = decodedToken.uid;
            let user = await db.collection('users').doc(uid).get();
            res.status(200).json({displayName: user.get("displayName"), photoURL: user.get("photoURL")});
        })
        .catch((error) => {
            res.status(400).end();
        });
    } catch(e) {
        res.status(400).end();
    }
    
}