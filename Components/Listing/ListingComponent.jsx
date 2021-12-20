import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../UserContext";
import { Button, Grid, Modal, Typography } from "@mui/material";
import ListingForm from "./ListingForm";
import UserProvider from "../UserContext";
import Contact from "../Chat/Contact";

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

  if (!listing.id) return <h1>Loading...</h1>;

  return (
    <>
      <Grid
        container
        alignItems="center"
        direction="row"
        justifyContent="center"
      >
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} align="center">
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
          <br />
          <div style={{ textAlign: "center" }}>
            <UserProvider fallback={<></>}>
              <EditButton listing={listing} setListing={setListing} />
            </UserProvider>
          </div>
        </Grid>
        <UserProvider
          fallback={
            <Typography>Sign In to Contact {listing.madeBy}</Typography>
          }
        >
          {listing.active ? <Contact listing={listing}/> : <h3>This listing is inactive</h3>}
        </UserProvider>
      </Grid>
    </>
  );
};

const EditButton = ({ listing, setListing }) => {
  const { user } = useUser();
  const [open, setOpen] = useState(false);

  if (listing.posterID === user.uid){
    return (
      <>
        <Button
          style={{ backgroundColor: "#A92C68", marginBottom:"20px" }}
          variant="contained"
          onClick={() => {
            setOpen(true);
          }}
        >
          <Typography>EDIT POST</Typography>
        </Button>
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          sx={{overflow: 'scroll'}}
        >
          <div>
            <ListingForm
              formTitle="Edit Listing"
              setListing={setListing}
              endpoint={`/api/listing/update/${listing.id}`}
              setOpen={setOpen}
            />
          </div>
        </Modal>
      </>
    );
  } else {
    return <></>;
  }
};

export default ListingComponent;
