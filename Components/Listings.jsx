import React, { useState, useEffect } from "react";
import Card from "./Cards/ListingCard";
import { Grid, Typography, Divider, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";
import SelectSchool from "./SelectSchool";
import UserProvider from "./UserContext";
import UserSchool from "./UserSchool";

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "32px",
            gap: "32px",
          }}
        >
          <LocationOnIcon sx={{ fontSize: "30px" }} />
          <UserProvider
            fallback={
              <SelectSchool setSchool={setSchool} sx={{ width: "500px" }} />
            }
          >
            <UserSchool setSchool={setSchool} />
          </UserProvider>
        </div>
      </div>

      <Divider sx={{ borderColor: "#C0C0C0" }} />

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
