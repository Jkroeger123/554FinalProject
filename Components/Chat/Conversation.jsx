import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { useChat } from "./ChatContext";

function Conversation({ conversation }) {
  const { setSelectedChat } = useChat();

  const OnClick = () => {
    setSelectedChat(conversation.recepient);
  };

  return (
    <Stack
      onClick={OnClick}
      direction="row"
      spacing={2}
      sx={{ cursor: "pointer" }}
    >
      <Avatar>H</Avatar>
      <Typography>{conversation.recepient}</Typography>
    </Stack>
  );
}

export default Conversation;
