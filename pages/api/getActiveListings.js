import listings from "../../Utils/db/listings";

export default async (req, res) => {
  let { uid } = req.body;

  try {
    const listing = await listings.getActiveListingsByUser(uid);
    res.status(200).json(listing);
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};
