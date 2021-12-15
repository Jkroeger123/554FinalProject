import React, { useState, useEffect } from "react";
import Card from "./ListingCard/ListingCard";
import { Grid, Typography, Divider, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";

function Listings() {
  const [school, setSchool] = useState("Stevens Institute of Technology");
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (!school || typeof school != "string") return;

    const fetch = async () => {
      let { data } = await axios.post("/api/getListingsBySchool", {
        school: school,
      });

      setListings(data);
    };

    fetch();
  }, [school]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h4"
          component="div"
          sx={{
            color: "#2A265A",
            marginLeft: "50px",
            marginTop: "35px",
            marginBottom: "25px",
          }}
        >
          Nearby Listings
        </Typography>
        <Button
          variant="text"
          sx={{
            color: "#A92C68",
            marginRight: "50px",
            marginTop: "35px",
            marginBottom: "35px",
          }}
        >
          <LocationOnIcon />
          <Typography variant="h5">{school}</Typography>
        </Button>
      </div>

      <Divider />

      <Grid
        container
        spacing={6}
        sx={{
          width: "100vw",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5px",
        }}
      >
        {listings.map((l) => (
          <Grid item xs={12} sm={4} md={3} key={l.id}>
            <Card data={l} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Listings;
