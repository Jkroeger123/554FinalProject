import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

function Conversation({ conversation }) {
  const router = useRouter();

  const OnClick = () => {
    router.push(`/chat/${conversation.recepient}`);
  };

  console.log(conversation);

  return (
    <Stack
      onClick={OnClick}
      direction="row"
      spacing={2}
      sx={{ cursor: "pointer" }}
    >
      <Avatar src={conversation.photoURL}></Avatar>
      <Stack direction="column" spacing={-1}>
        <Typography>{conversation.displayName}</Typography>
        <Typography
          sx={{
            width: "300px",
            color: "#9B9B9B",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {conversation.lastMessage.message}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Conversation;
