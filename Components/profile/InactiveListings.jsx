import React from "react";
import Card from "../Cards/UserListingCard";
import data from "../../Utils/db/usersListings";
import { Grid, Typography, Divider, Button } from "@mui/material";

export default function InactiveListings() {
  return (
    <div>
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
        {data
          .filter((l) => l.active == false)
          .map((l) => (
            <Grid item xs={12} sm={4} md={3} key={l.id}>
              <Card data={l} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
