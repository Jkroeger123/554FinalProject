import db, {auth} from '../../Utils/db';
import listings from "../../Utils/db/listings";

export default async (req, res) => {
  
    let {idToken} = req.body;

    try
    {
        auth.verifyIdToken(idToken)
        .then( async (decodedToken) => {

            const uid = decodedToken.uid;

            let userDoc = await db.collection('users').doc(uid).get();

            // iterate through favorites, get each one and return array of them
            let toReturn = [];

            const { favoriteListings } = userDoc.data();
            for (const f of favoriteListings) {
                try {
                    const l = await listings.getListingById(f);
                    toReturn.push(l);
                } catch {
                    // listing doesn't exist, shouldn't happen
                    // let's just delete it from favorites
                    await db.collection('users').doc(uid).update({favoriteListings: favoriteListings.filter((e) => e !== f)});
                }
            }

            res.status(200).json(toReturn);
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