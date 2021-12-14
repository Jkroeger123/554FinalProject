import listings from "./listings.js";

const testListings = [
  {
    image: "test_potato.jpg",
    title: "My Potato",
    description: "This is a potato.",
    price: 0,
    madeBy: "Ronald Estevez",
    school: "Stevens Institute of Technology",
  },
  {
    image: "test_carrot.jpg",
    title: "My Carrot",
    description: "This is a carrot.",
    price: 10,
    madeBy: "Bonald Bestevez",
    school: "Stevens Institute of Technology",
  },
  {
    image: "test_tomato.jpg",
    title: "My Tomato",
    description: "This is a tomato.",
    price: 10,
    madeBy: "Jonald Jestevez",
    school: "Stevens Institute of Technology",
  },
];

const main = async () => {
  try {
    for (const l of testListings) {
      const { image, title, description, price, madeBy, school } = l;
      const res = await listings.addListing(
        image,
        title,
        description,
        price,
        madeBy,
        school
      );
      l.id = res.id;
      console.log(res);
    }
  } catch (e) {
    console.log(e);
    return;
  }

  try {
    const get = await listings.removeListing(testListings[0].id);
    console.log(get);
  } catch (e) {
    console.log(e);
    return;
  }

  try {
    const get = await listings.updateListing(testListings[0].id, {
      title: "BIG Potato Now",
      price: 100000,
    });
    console.log(get);
  } catch (e) {
    console.log(e);
    return;
  }

  // try {
  //   const get = await listings.updateListing("FSKeEYs8WOLNHxPK5CWQ", {
  //     price: 10000,
  //     madeBy: "restevez",
  //   });
  //   console.log(get);
  // } catch (e) {
  //   console.log(e);
  //   return;
  // }

  // try {
  //   const stevensListings = await listings.getListingsBySchool(
  //     "Stevens Institute of Technology"
  //   );
  //   console.log(stevensListings.length);
  // } catch (e) {
  //   console.log(e);
  //   return;
  // }

  // try {
  //   const ronActive = await listings.getActiveListingsByUser("Ronald Estevez");
  //   console.log(ronActive.length);
  // } catch (e) {
  //   console.log(e);
  //   return;
  // }

  // try {
  //   const ronInactive = await listings.getInactiveListingsByUser(
  //     "Ronald Estevez"
  //   );
  //   console.log(ronInactive.length);
  // } catch (e) {
  //   console.log(e);
  //   return;
  // }
};

main();
