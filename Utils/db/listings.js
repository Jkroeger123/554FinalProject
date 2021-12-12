import db from "./index.js";

// get listings collection
const listings = db.collection("listings");

const addListing = async (image, title, description, price, madeBy, school) => {
  // create a document for new listing
  const listingDoc = listings.doc();

  // set new listing fields
  await listingDoc.set({
    image,
    title,
    description,
    price,
    madeBy,
    school,
    uploadDate: new Date().toISOString().split("T")[0],
    id: listingDoc.id,
  });

  // return new listing's data
  return (await listingDoc.get()).data();
};

const getListingById = async (id) => {
  if (!id || typeof id !== "string") {
    throw new Error("Expected an argument of type 'string' for listing id.");
  }

  // get listing with id from listings collection
  const listing = await listings.doc(id).get();

  // throw error if listing does not exist
  if (!listing.exists) {
    throw new Error(`Listing with id "${id}" does not exist."`);
  }

  // return listing's data
  return listing.data();
};

const updateListing = async (id, updatedFields) => {
  if (!id || typeof id !== "string") {
    throw new Error("Expected an argument of type 'string' for listing id.");
  }

  if (
    !updatedFields ||
    updatedFields.constructor.name !== "Object" ||
    !Object.keys(updatedFields).length
  ) {
    throw new Error(
      "Expected a non-empty argument of type 'object' for listing update."
    );
  }

  // get listing with id from listings collection
  const listing = await listings.doc(id);

  // object to hold updated listing data
  const newListingData = {};

  const fields = [
    "image",
    "title",
    "description",
    "price",
    "madeBy",
    "uploadDate",
    "school",
  ];

  fields.forEach((f) => {
    if (updatedFields[f]) {
      newListingData[f] = updatedFields[f];
    }
  });

  if (!(await listing.get()).exists) {
    throw new Error(`Listing with id "${id}" does not exist."`);
  }

  await listing.update(updatedFields);

  return (await listing.get()).data();
};

const getListingsByUser = async (username) => {
  if (!username || typeof username !== "string") {
    throw new Error(
      "Expected an argument of type 'string' for username parameter."
    );
  }

  const userListings = await listings.where("madeBy", "==", username).get();

  if (userListings.empty) {
    return [];
  }

  const res = [];

  userListings.forEach((l) => {
    res.push(l.data());
  });

  return res;
};

const getListingsBySchool = async (school) => {
  if (!school || typeof school !== "string") {
    throw new Error(
      "Expected an argument of type 'string' for school parameter."
    );
  }

  const schoolListings = await listings.where("school", "==", school).get();

  if (schoolListings.empty) {
    return [];
  }

  const res = [];

  schoolListings.forEach((l) => {
    res.push(l.data());
  });

  return res;
};

const removeListing = async (id) => {
  if (!id || typeof id !== "string") {
    throw new Error("Expected an argument of type 'string' for listing id.");
  }

  const listing = await listings.doc(id);

  if (!(await listing.get()).exists) {
    throw new Error(`Listing with id "${id}" does not exist."`);
  }

  return await listing.delete();
};

export default {
  addListing,
  getListingById,
  getListingsByUser,
  getListingsBySchool,
  updateListing,
  removeListing,
};
