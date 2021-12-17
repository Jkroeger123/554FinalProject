import React from "react";
import UserProvider from "../../Components/UserContext";
import ListingForm from "../../Components/Listing/ListingForm";
import { Container } from "@mui/material";
import {useRouter} from 'next/router';

function NewListing() {
  const router = useRouter();
  return (
    <UserProvider>
      <br />
      <br />
      <Container>
        <ListingForm
          formTitle="Create a New Listing"
          endpoint={`/api/listing/create`}
          onSubmit={(id) => router.push(`/listing/${id}`)}
        />
      </Container>
    </UserProvider>
  );
}

export default NewListing;
