import React, { useState, useEffect } from "react";
import { useSocket } from "./SocketContext";
import { Button, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Message from "./Message";
import { useUser } from "../UserContext";
import { v4 as uuidv4 } from "uuid";
import { auth } from "../../Utils/firebase";
import axios from "axios";

function MessageArea({ selectedChat }) {
  const { user } = useUser();
  const socket = useSocket();
  const [id, setID] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`Chat Switched to ${selectedChat}, user is: ${user.uid}`);

    //Set current user to send to
    setID(selectedChat);

    //Clear message UI
    setMessages([]);

    const fetch = async () => {
      let token = await auth.currentUser.getIdToken();
      let { data } = await axios.post(`/api/getMessages`, {
        idToken: token,
        id: selectedChat,
      });

      //Load message UI with stored messages
      if (data) {
        setMessages(data.messages);
        setName(data.displayName);
      }
    };

    fetch();
  }, [selectedChat]);

  useEffect(() => {
    if (!socket) return;
    socket.on("receive", AddMessage);
  }, [socket, AddMessage]);

  const OnSendClicked = async () => {
    socket.emit("send", { recipient: id, msg: message });

    setMessages((prev) => [
      ...prev,
      { message, sender: user.uid, id: uuidv4() },
    ]);

    setMessage("");

    let token = await auth.currentUser.getIdToken();
    await axios.post(`/api/addMessage`, {
      idToken: token,
      message: { recepient: id, message: message },
    });
  };

  const AddMessage = async ({ sender, message }) => {
    setMessages((prev) => [
      ...prev,
      { message, recepient: user.uid, id: uuidv4() },
    ]);
    setCount(count + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "33%",
      }}
    >
      <div>
        <Typography align="center">{name}</Typography>
      </div>

      <Stack direction="column" spacing={2}>
        {messages.map((m, index) => (
          <Message
            message={m.message}
            self={m.recepient !== user.uid}
            key={index}
          />
        ))}
      </Stack>

      <div style={{ position: "fixed", bottom: "0", margin: "16px" }}>
        <Stack direction="row" spacing={2}>
          <TextField
            aria-label="Message Form"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ width: "30vw" }}
          />
          <Button onClick={OnSendClicked}>Send</Button>
        </Stack>
      </div>
    </div>
  );
}

export default MessageArea;
