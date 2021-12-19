import React, { useState, useEffect } from "react";
import Card from "../Components/Cards/ListingCard";
import { Grid, Typography, Divider, Button } from "@mui/material";
import axios from "axios";
import { auth } from "../Utils/firebase";
import UserProvider from "../Components/UserContext";

function favorites() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        let idToken = await auth.currentUser.getIdToken();
        let { data } = await axios.post("/api/getFavorites", {
          idToken
        });
        setData(data);
      } catch {
        // user not logged in, will automatically redirect 
        // but we need the try/catch to prevent an error
        setData([]);
      }
    };
    fetch();
  }, []);

  return (
    <UserProvider protectedRoute>
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
    </UserProvider>
  );
}

export default favorites;
