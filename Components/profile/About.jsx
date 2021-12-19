import React from "react";
import { Grid, Typography } from "@mui/material";
import { useUser } from "../UserContext";

function About() {
  const { userData } = useUser();

  return (
    <div>
      <Grid
        container
        spacing={3}
        sx={{
          width: "100vw",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5px",
        }}
      >
        <Grid item xs={12} sm={4} md={3}>
          <Typography component={"span"} variant="h5">
            Display Name: {userData.displayName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography component={"span"} variant="h5">
            School: {userData.school}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
