import React from "react";
import Card from "../Components/Cards/ListingCard";
import { Grid, Typography, Divider, Button } from "@mui/material";
import data from "../Utils/db/favoriteListings";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function favorites() {
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
          Favorite Listings
        </Typography>
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
        {data.map((l) => (
          <Grid item xs={12} sm={4} md={3} key={l.id}>
            <Card data={l} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default favorites;
