import React from "react";
import { Stack, Button } from "@mui/material";
import { useUser } from "../UserContext";
import { useRouter } from "next/router";

function Contact({ listing }) {
  const router = useRouter();
  const { user } = useUser();

  if (user.uid === listing.posterID) return <></>;

  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={() => {
          router.push(`/chat/${listing.posterID}`);
        }}
      >
        Contact {listing.madeBy}
      </Button>
    </Stack>
  );
}

export default Contact;
