import listings from "../../Utils/db/listings";

export default async (req, res) => {
  let { id } = req.body;

  try {
    const listing = await listings.getListingById(id);
    res.status(200).json(listing);
  } catch (e) {
    // TODO: Render 404 page if listing is not found
    console.log(e);
    res.status(400).end();
  }
};
