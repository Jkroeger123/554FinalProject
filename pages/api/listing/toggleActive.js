import listings from "../../../Utils/db/listings";
import {auth} from '../../../Utils/db';

export default async (req, res) => {

  let { id, idToken, active } = req.body;

  try {
    let decodedToken = await auth.verifyIdToken(idToken);

    let listing;
    if(active){
      listing = await listings.addListing(id, decodedToken.uid);
    }else{
      listing = await listings.removeListing(id, decodedToken.uid);
    }

    
    res.status(200).json(listing);
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};
