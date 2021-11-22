import React, { useState, useEffect } from "react";
import { useSocket } from "./SocketContext";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

function MessageArea() {
  const socket = useSocket();
  const [id, setID] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!socket) return;
    socket.on("receive", AddMessage);
  }, [socket, AddMessage]);

  const OnSendClicked = async () => {
    socket.emit("send", { recipient: id, msg: message });
  };

  const AddMessage = ({ sender, message }) => {
    setMessages([<h2>{message}</h2>]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <TextField
        value={id}
        placeholder="Recepient"
        onChange={(e) => setID(e.target.value)}
      />
      <TextField
        aria-label="Message Form"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={OnSendClicked}>Send</Button>

      {messages}
    </div>
  );
}

export default MessageArea;
