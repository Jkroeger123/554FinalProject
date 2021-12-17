import listings from "../../../../Utils/db/listings";
import { validateListing } from "../../../../Utils/db/schema";
import {auth} from '../../../../Utils/db';

export default async (req, res) => {
  
  const { id } = req.query;
  const { listingData, idToken} = req.body;
  try {
    const validationError = validateListing(listingData);
    if (validationError) {
      throw new Error(validationError[0].message);
    }
  } catch (e) {
    console.log(e);
    res.status(400).end();
    return;
  }

  try {
    let decodedToken = await auth.verifyIdToken(idToken);
    const updatedListing = await listings.updateListing(id, listingData, decodedToken.uid);
    res.status(200).json(updatedListing);
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};
