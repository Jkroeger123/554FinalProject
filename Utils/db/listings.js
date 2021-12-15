import db from "./index.js";
import Ajv from "ajv";
import ajvErrors from "ajv-errors";

const ajv = new Ajv({ removeAdditional: true, allErrors: true, $data: true });
ajvErrors(ajv);

// get listings collection
const listings = db.collection("listings");

const schema = {
  type: "object",
  additionalProperties: false,
  properties: {
    image: {
      type: "string",
      nullable: false,
      errorMessage: { type: "image must be String" },
    },
    title: {
      type: "string",
      nullable: false,
      errorMessage: { type: "title must be String" },
    },
    description: {
      type: "string",
      nullable: false,
      errorMessage: { type: "image must be String" },
    },
    price: {
      type: "integer",
      nullable: false,
      errorMessage: { type: "price must be Integer" },
    },
    madeBy: {
      type: "string",
      nullable: false,
      errorMessage: { type: "madeBy must be String" },
    },
    school: {
      type: "string",
      nullable: false,
      errorMessage: { type: "school must be String" },
    },
    condition: {
      type: "string",
      nullable: false,
      errorMessage: { type: "condition must be String" },
    },
  },
};

const addListing = async (
  image,
  title,
  description,
  price,
  madeBy,
  school,
  condition
) => {
  const newListingData = {
    image,
    title,
    description,
    price,
    madeBy,
    school,
    condition,
  };

  // validate new listing fields
  const newListingSchema = { ...schema };

  newListingSchema.required = [
    "image",
    "title",
    "description",
    "price",
    "madeBy",
    "school",
    "condition",
  ];

  const validate = ajv.compile(newListingSchema);

  const valid = validate(newListingData);

  if (!valid) {
    throw new Error(validate.errors[0].message);
  }

  // create a document for new listing
  const listingDoc = listings.doc();

  // set new listing fields
  await listingDoc.set({
    ...newListingData,
    // generate listing date in YYYY/MM/DD format
    uploadDate: new Date().toISOString().split("T")[0],
    active: true,
    id: listingDoc.id,
  });

  // return new listing's data
  return (await listingDoc.get()).data();
};

const getListingById = async (id) => {
  // error check id parameter
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

const updateListing = async (id, updatedListingData) => {
  // error check id parameter
  if (!id || typeof id !== "string") {
    throw new Error("Expected an argument of type 'string' for listing id.");
  }

  // check that non-empty object was passed
  if (
    !updatedListingData ||
    updatedListingData.constructor.name !== "Object" ||
    !Object.keys(updatedListingData).length
  ) {
    throw new Error(
      "Expected a non-empty argument of type 'object' for listing update."
    );
  }

  // validate updated listing schema
  const updatedListingSchema = { ...schema };

  const validate = ajv.compile(updatedListingSchema);

  const valid = validate(updatedListingData);

  if (!valid) {
    throw new Error(validate.errors[0].message);
  }

  // update listing date to reflect date of latest change
  updatedListingData.uploadDate = new Date().toISOString().split("T")[0];

  // get listing with id from listings collection
  const listing = await listings.doc(id);

  // update listing
  await listing.update(updatedListingData);

  // return updated listing
  return (await listing.get()).data();
};

const getListingsByUser = async (username, active) => {
  // error check username parameter
  if (!username || typeof username !== "string" || !username.trim()) {
    throw new Error(
      "Expected an argument of type 'string' for username parameter."
    );
  }

  // get all listings made by user
  const userListings = await listings
    .where("madeBy", "==", username)
    .where("active", "==", active)
    .get();

  if (userListings.empty) {
    return [];
  }

  const res = [];

  // produce array of listing results
  userListings.forEach((l) => {
    res.push(l.data());
  });

  return res;
};

const getActiveListingsByUser = async (username) => {
  return await getListingsByUser(username, true);
};

const getInactiveListingsByUser = async (username) => {
  return await getListingsByUser(username, false);
};

const getListingsBySchool = async (school) => {
  // error check school parameter
  if (!school || typeof school !== "string" || !school.trim()) {
    throw new Error(
      "Expected an argument of type 'string' for school parameter."
    );
  }

  // get all listings under 'school'
  const schoolListings = await listings
    .where("school", "==", school)
    .where("active", "==", true)
    .get();

  if (schoolListings.empty) {
    return [];
  }

  const res = [];

  // produce array for listing results
  schoolListings.forEach((l) => {
    res.push(l.data());
  });

  return res;
};

const deleteListing = async (id) => {
  if (!id || typeof id !== "string" || !id.trim()) {
    throw new Error("Expected an argument of type 'string' for listing id.");
  }

  // retrieve listing to remove
  const listing = await listings.doc(id);

  // check if listing to be removed exists
  if (!(await listing.get()).exists) {
    throw new Error(`Listing with id "${id}" does not exist."`);
  }

  // delete listing
  return await listing.delete();
};

// mark listing as inactive
const removeListing = async (id) => {
  return await updateListing(id, { active: false });
};

export default {
  addListing,
  getListingById,
  getActiveListingsByUser,
  getInactiveListingsByUser,
  getListingsBySchool,
  updateListing,
  deleteListing,
  removeListing,
};
