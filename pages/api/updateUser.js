import db, {auth} from '../../Utils/db';
import { validateUpdateUser } from "../../../../Utils/db/schema";

export default async (req, res) => {
  
    let {idToken, updateUserData} = req.body;

    try
    {
        auth.verifyIdToken(idToken)
        .then( async (decodedToken) => {

            const uid = decodedToken.uid;

            let userDoc = await db.collection('users').doc(uid).get();

            // End request if the account doesn't exist
            if(!userDoc.data()) return res.status(404);

            // Otherwise, update and return the account
            // ONLY for display name, photo url, and school
            
            // updateUserData must exist and be non-empty, validation will ensure no extra fields
            if (!updateUserData || Object.keys(updateUserData).length <= 0) return res.status(400);
            const validationError = validateUpdateUser(updateUserData);
            if (validationError) {
               console.log(validationError[0].message);
               return res.status(400);
            }
            
            await db.collection('users').doc(uid).update(updateUserData);

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