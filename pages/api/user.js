import db, {auth} from '../../Utils/db';

export default async (req, res) => {
  
    let {idToken, userID} = req.body;

    try
    {
        auth.verifyIdToken(idToken)
        .then( async (decodedToken) => {

            const uid = decodedToken.uid;
            let user = await db.collection('users').doc(userID).get();
            res.status(200).json({...user.data()});
        })
        .catch((error) => {
            res.status(400).end();
        });
    } catch(e) {
        res.status(400).end();
    }
    
}