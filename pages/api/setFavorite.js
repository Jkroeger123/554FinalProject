import db, {auth} from '../../Utils/db';
import listings from "../../Utils/db/listings";

export default async (req, res) => {
  
    let {idToken, favorite, listingId} = req.body;

    try
    {
        auth.verifyIdToken(idToken)
        .then( async (decodedToken) => {

            const uid = decodedToken.uid;

            let userDoc = await db.collection('users').doc(uid).get();

            // Check if favorite is a boolean
            if (!(favorite === true || favorite === false)) return res.status(400);

            // Check that listing exists

            if (typeof listingId !== 'string') return res.status(400);
            listingId = listingId.trim();
            if (listingId === '') return res.status(400);
            try {
                await listings.getListingById(listingId);
            } catch {
                return res.status(404);
            }

            // if so, update and return the account
            const oldFaves = userDoc.favoriteListings;
            if (favorite) {
                // add to favorites, if not already favorited
                if (!oldFaves.includes(listingId)){
                    let newFavorites = {
                        favoriteListings: [...oldFaves, listingId]
                    };
                    
                    await db.collection('users').doc(uid).update(newFavorites);
                }
            } else {
                // remove from favorites, if there
                if (oldFaves.includes(listingId)){
                    let newFavorites = {
                        favoriteListings: oldFaves.filter((e) => e !== listingId)
                    };
                    
                    await db.collection('users').doc(uid).update(newFavorites);
                }
            }

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