import listings from "../../../Utils/db/listings";
import { validateListing } from "../../../Utils/db/schema";

export default async (req, res) => {
  const { listingData } = req.body;

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
    const newListing = await listings.createListing(listingData);
    res.status(200).json(newListing);
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};
