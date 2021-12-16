import listings from "../../../../Utils/db/listings";

export default async (req, res) => {
  const { id } = req.query;
  const { newListingData } = req.body;

  try {
    const { data } = await listings.updateListing(id, newListingData);
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};
