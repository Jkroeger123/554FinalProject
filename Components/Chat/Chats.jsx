import React, { useEffect, useState } from "react";
import Conversation from "./Conversation";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { auth } from "../../Utils/firebase";
import axios from "axios";

function Chats() {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      let token = await auth.currentUser.getIdToken();
      let { data } = await axios.post(`/api/getMessages`, {
        idToken: token,
      });
      setConversations(data);
    };

    fetch();
  }, []);

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
          {conversations.map((c, index) => (
            <Conversation conversation={c} key={index} />
          ))}
        </Stack>
      </div>
      <Divider orientation="vertical" flexItem />
    </>
  );
}

export default Chats;
