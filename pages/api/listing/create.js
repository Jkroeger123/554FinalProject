import listings from "../../../Utils/db/listings";
import { validateListing } from "../../../Utils/db/schema";
import {auth} from '../../../Utils/db';

export default async (req, res) => {
  const { listingData, idToken } = req.body;

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
    const newListing = await listings.createListing(listingData, decodedToken.uid);
    res.status(200).json(newListing);
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};
