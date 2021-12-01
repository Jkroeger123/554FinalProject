import React from "react";
import Conversation from "./Conversation";
import Conversations from "../../Conversation"; //Replace with database calls
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

function Chats() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          width: "400px",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h3" sx={{ margin: "16px" }}>
          Chats
        </Typography>
        <Divider />
        <Stack direction="column" spacing={2} sx={{ margin: "16px" }}>
          {Conversations.map((c, index) => (
            <Conversation conversation={c} key={index} />
          ))}
        </Stack>
      </div>
      <Divider orientation="vertical" flexItem />
    </>
  );
}

export default Chats;
