import React from "react";
import UserProvider from "../../Components/UserContext";
import ListingForm from "../../Components/Listing/ListingForm";
import { Container } from "@mui/material";

function NewListing() {
  return (
    <UserProvider>
      <br />
      <br />
      <Container>
        <ListingForm
          formTitle="Create a New Listing"
          endpoint={`/api/listing/create`}
        />
      </Container>
    </UserProvider>
  );
}

export default NewListing;
