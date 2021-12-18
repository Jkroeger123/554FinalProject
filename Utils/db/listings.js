import db from "./index.js";
import { validateListing } from "./schema";

// get listings collection
const listings = db.collection("listings");

const createListing = async (newListingData, uid) => {
  // validate new listing fields
  const validationError = validateListing(newListingData, true);

  if (validationError) {
    throw new Error(validationError[0].message);
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
    posterID: uid
  });

  //Update User listings array TODO: test this
  let userDoc = await db.collection("users").doc(uid);
  let userData = (await userDoc.get()).data();
  userData.listings.push(listingDoc.id);
  await userDoc.update(userData);


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

const updateListing = async (id, updatedListingData, uid) => {

 

  if (!uid || typeof(uid) != 'string'){
    throw new Error("Expected an argument of type 'string' for uid.");
  }

  // error check id parameter
  if (!id || typeof id !== "string") {
    throw new Error("Expected an argument of type 'string' for listing id.");
  }

  // check that non-empty object was passed
  if (
    !updatedListingData ||
    typeof(updatedListingData) != "object" ||
    !Object.keys(updatedListingData).length
  ) {
    throw new Error(
      "Expected an argument of type 'object' for listing update."
    );
  }

  // remove empty fields
  Object.keys(updatedListingData).forEach(
    (k) => updatedListingData[k] == undefined && delete updatedListingData[k]
  );

  // check if any fields remain to update
  if (!Object.keys(updatedListingData).length) {
    throw new Error("Expected at least one field to update for listing.");
  }

  // validate updated listing schema
  const validationError = validateListing(updatedListingData);

  if (validationError) {
    throw new Error(validationError[0].message);
  }

  // update listing date to reflect date of latest change
  updatedListingData.uploadDate = new Date().toISOString().split("T")[0];

  // get listing with id from listings collection
  const listing = await listings.doc(id);

  const dat = (await listing.get()).data();

  if(dat.posterID != uid){
    throw new Error("Error: UID does not match the UID of the uploader.");
  }

  // update listing
  await listing.update(updatedListingData);

  // return updated listing
  return (await listing.get()).data();
};

const getListingsByUser = async (uid, active) => {
  // error check username parameter
  if (!uid || typeof uid !== "string" || !uid.trim()) {
    throw new Error(
      "Expected an argument of type 'string' for username parameter."
    );
  }

  // get all listings made by user
  const userListings = await listings
    .where("posterID", "==", uid)
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

const getActiveListingsByUser = async (uid) => {
  return await getListingsByUser(uid, true);
};

const getInactiveListingsByUser = async (uid) => {
  return await getListingsByUser(uid, false);
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
const removeListing = async (id, uid) => {
  return await updateListing(id, { active: false }, uid);
};

// mark listing as inactive
const addListing = async (id, uid) => {
  return await updateListing(id, { active: true }, uid);
};

export default {
  createListing,
  getListingById,
  getActiveListingsByUser,
  getInactiveListingsByUser,
  getListingsBySchool,
  updateListing,
  deleteListing,
  removeListing,
  addListing
};
