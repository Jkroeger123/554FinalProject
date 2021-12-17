import React, { useEffect, useState } from "react";
import Conversation from "./Conversation";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { auth } from "../../Utils/firebase";
import { useSocket } from "./SocketContext";
import axios from "axios";

function Chats() {
  const socket = useSocket();
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      let token = await auth.currentUser.getIdToken();
      let { data } = await axios.post(`/api/getConversations`, {
        idToken: token,
      });
      setConversations(data);
    };

    fetch();
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("receive", AddMessage);
  }, [socket, AddMessage]);

  const AddMessage = async ({ sender, message }) => {
    const convo = conversations.find((c) => c.recepient == sender);

    //If the convo exists, then update the most recent message
    if (convo) {
      setConversations((prev) => {
        return prev.map((c) => {
          if (c.recepient == sender) {
            c.lastMessage = { recepient: sender, message: message };
          }
          return c;
        });
      });
    } else {
      //If the convo doesnt exist, poll the database -- TODO: make this better
      setTimeout(async () => {
        let token = await auth.currentUser.getIdToken();
        let { data } = await axios.post(`/api/getConversations`, {
          idToken: token,
        });
        setConversations(data);
      }, 2000);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          minHeight: "100vh",
          margin: "32px",
        }}
      >
        <Typography variant="h4" component="div" sx={{color: '#2A265A', marginLeft: '50px', marginTop: '35px', marginBottom: '25px'}}>
          Direct Messages
        </Typography>
        <Divider sx={{ borderColor: "#C0C0C0" }} />
        <Stack direction="column" spacing={2} sx={{ margin: "16px" }}>
          {conversations.map((c) => (
            <Conversation conversation={c} key={c.recepient} />
          ))}
        </Stack>
      </div>
      <Divider orientation="vertical" flexItem />
    </>
  );
}

export default Chats;
