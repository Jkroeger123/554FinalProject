import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography, Divider } from "@mui/material";
import { useRouter } from "next/router";

function Conversation({ conversation }) {
  const router = useRouter();

  const OnClick = () => {
    router.push(`/chat/${conversation.recepient}`);
  };

  return (
    <>
      <Stack
        onClick={OnClick}
        direction="row"
        spacing={2}
        sx={{ cursor: "pointer", width: "100%" }}
      >
        <Avatar
          src={conversation.photoURL}
          style={{ width: "80px", height: "80px" }}
          alt={`${conversation.displayName}`}
        />
        <Stack direction="column">
          <Typography variant="h1" style={{ fontSize: "30px" }}>
            {conversation.displayName}
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "300px",
              color: "#767676",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "20px",
            }}
          >
            {conversation.lastMessage
              ? conversation.lastMessage.message
              : "No Messages"}
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={{ borderColor: "#C0C0C0" }} />
    </>
  );
}

export default Conversation;
