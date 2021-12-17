import listings from "../../../../Utils/db/listings";
import { validateListing } from "../../../../Utils/db/schema";

export default async (req, res) => {
  const { id } = req.query;
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
    const updatedListing = await listings.updateListing(id, listingData);
    res.status(200).json(updatedListing);
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};
