import React, { useEffect, useState } from "react";
import Card from "../Cards/UserListingCard";
import { Grid } from "@mui/material";
import { useUser } from "../UserContext";
import axios from "axios";

export default function InactiveListings() {
  const [data, setData] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetch = async () => {
      let { data } = await axios.post("/api/getInactiveListings", {
        uid: user.uid,
      });
      setData(data);
    };
    fetch();
  }, []);

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
