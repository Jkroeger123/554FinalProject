import React, { useState, useEffect, useRef } from "react";
import { useSocket } from "./SocketContext";
import { Button, Stack, Typography, Divider, Avatar } from "@mui/material";
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
  const [photoURL, setPhotoURL] = useState("");
  const messageEl = useRef(null);

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
        setPhotoURL(data.photoURL);
      }
    };

    fetch();
  }, [selectedChat]);

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

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

  const AddMessage = async ({ message }) => {
    setMessages((prev) => [
      ...prev,
      { message, recepient: user.uid, id: uuidv4() },
    ]);
    setCount(count + 1);
  };

  return (
    <div
      style={{
        margin: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ marginBottom: "32px" }}>
        <Avatar
          src={photoURL}
          style={{
            width: "80px",
            height: "80px",
            margin: "auto",
            marginBottom: "16px",
          }}
          alt={`${name}`}
        />
        <Typography
          align="center"
          variant="h1"
          style={{ fontSize: "30px", marginBottom: "16px" }}
        >
          {name}
        </Typography>
        <Divider sx={{ borderColor: "#C0C0C0" }} />
      </div>

      <div style={{ height: "53vh", overflowY: "scroll" }} ref={messageEl}>
        <Stack direction="column" spacing={2}>
          {messages.map((m, index) => (
            <Message
              message={m.message}
              self={m.recepient !== user.uid}
              key={index}
            />
          ))}
        </Stack>
      </div>

      <div style={{ margin: "auto", marginTop: "64px" }}>
        <Stack direction="row" spacing={2}>
          <TextField
            aria-label="Message Form"
            placeholder="Enter your message"
            label="Enter your message"
            id="Enter your message"
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
