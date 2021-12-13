import React, { useEffect, useState } from "react";
import axios from "axios";

const ListingComponent = ({ selectedListing }) => {
  const [listing, setListing] = useState({});

  useEffect(() => {
    const fetch = async () => {
      let { data } = await axios.post("/api/getSingleListing", {
        id: selectedListing,
      });
      setListing(data);
    };

    fetch();
  }, []);

  return <div>{JSON.stringify(listing)}</div>;
};

export default ListingComponent;
