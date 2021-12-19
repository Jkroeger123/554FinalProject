import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import SelectSchool from "../SelectSchool";
import axios from "axios";
import { auth } from "../../Utils/firebase";

function About() {
  const [school, setSchool] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        let idToken = await auth.currentUser.getIdToken();
        let { data } = await axios.post("/api/user", {
          idToken,
          userID: auth.currentUser.uid,
        });
        setData(data);
      } catch {
        // user not logged in, will automatically redirect 
        // but we need the try/catch to prevent an error
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        let idToken = await auth.currentUser.getIdToken();
        let { data } = await axios.post("/api/user", {
          idToken,
          userID: auth.currentUser.uid,
        });
        setData(data);
        if (school !== data.school) {
          await axios.post(`/api/updateUser`, {
            idToken,
            updateUserData: { school: school }
          });
        }
      } catch {
        // user not logged in, will automatically redirect 
        // but we need the try/catch to prevent an error
        
      }
    };
    if (school !== 0) fetch();
  }, [school]);

  console.log(data);
  if (!data) return <h1>Loading...</h1>

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
            Display Name: {data.displayName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <SelectSchool setSchool={setSchool} initial={data.school} sx={{ width: "500px" }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
