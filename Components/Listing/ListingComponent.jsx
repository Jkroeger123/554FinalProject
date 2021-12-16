import React, { useEffect, useState } from "react";
import axios from "axios";
import Contact from "../Chat/Contact";
import { Grid, Typography } from "@mui/material";
import UserProvider from "../UserContext";

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

  if (!listing.id) return <h1>Loading</h1>;

  return (
    <Grid container justifyContents="center">
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={6}
        xl={6}
        sx={{ textAlign: "center" }}
      >
        <img
          src={listing.image}
          alt={listing.title}
          style={{ maxWidth: "80%" }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <h1>{listing.title}</h1>
        <h2>${listing.price}</h2>
        <br />
        <h3 style={{ color: "#A92C68" }}>{listing.school}</h3>
        <br />
        <h3>Seller:</h3>
        <p>{listing.madeBy}</p>
        <br />
        <h3>Condition:</h3>
        <p>{listing.condition}</p>
        <br />
        <h3>Details:</h3>
        <p>{listing.description}</p>
      </Grid>

      <UserProvider
        fallback={<Typography>Sign In to Contact {listing.madeBy}</Typography>}
      >
        <Contact listing={listing} />
      </UserProvider>
    </Grid>
  );
};

export default ListingComponent;
