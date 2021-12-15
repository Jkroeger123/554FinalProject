import listings from "./listings.js";

const testListings = [
  {
    image:
      "https://images.theconversation.com/files/72534/original/image-20150219-28209-ovexg7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
    title: "My Potato",
    description: "This is a potato.",
    price: 0,
    madeBy: "restevez",
    school: "Stevens Institute of Technology",
    condition: "Dirty.",
  },
  {
    image: "https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg",
    title: "My Carrot",
    description: "This is a carrot.",
    price: 10,
    madeBy: "bestevez",
    school: "Stevens Institute of Technology",
    condition: "Floppy?",
  },
  {
    image:
      "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients-usa.com/news/research/tomato-powder-beats-isolated-lycopene-in-study-but-expert-questions-scope-of-conclusions/12238409-1-eng-GB/Tomato-powder-beats-isolated-lycopene-in-study-but-expert-questions-scope-of-conclusions.jpg",
    title: "My Tomato",
    description: "This is a tomato.",
    price: 10,
    madeBy: "jestevez",
    school: "Stevens Institute of Technology",
    condition: "red!",
  },
];

const main = async () => {
  try {
    for (const l of testListings) {
      const { image, title, description, price, madeBy, school, condition } = l;
      const res = await listings.addListing(
        image,
        title,
        description,
        price,
        madeBy,
        school,
        condition
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
