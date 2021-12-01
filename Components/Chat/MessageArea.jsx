import React, { useState, useEffect } from "react";
import { useSocket } from "./SocketContext";
import { Button, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Message from "./Message";
import { useChat } from "./ChatContext";
import { useUser } from "../UserContext";
import { v4 as uuidv4 } from "uuid";

//To be replaced with database
import Conversations from "../../Conversation";

function MessageArea() {
  const { user } = useUser();
  const { selectedChat } = useChat();
  const socket = useSocket();
  const [id, setID] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Chat Switched to ${selectedChat}, user is: ${user.uid}`);

    //Set current user to send to
    setID(selectedChat);

    //Clear message UI
    setMessages([]);

    //Load message UI with stored messages
    let convo = Conversations.find((c) => c.recepient === selectedChat);
    if (convo) setMessages(convo.messages);
  }, [selectedChat]);

  useEffect(() => {
    if (!socket) return;
    socket.on("receive", AddMessage);
  }, [socket, AddMessage]);

  const OnSendClicked = async () => {
    socket.emit("send", { recipient: id, msg: message });
    AddMessage({ sender: user.uid, message });
    setMessage("");
  };

  const AddMessage = ({ sender, message }) => {
    let d = new Date();

    messages.push({ message, sender, date: d.toISOString(), id: uuidv4() });

    //TODO: Add message to Database

    setMessages(messages);
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
        <Typography align="center">{selectedChat}</Typography>
      </div>

      <Stack direction="column" spacing={2}>
        {messages.map((m) => (
          <Message
            message={m.message}
            self={m.sender === user.uid}
            key={m.id}
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
