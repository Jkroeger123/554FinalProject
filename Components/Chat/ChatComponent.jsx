import React from "react";
import { useUser } from "../UserContext";
import SocketProvider from "./SocketContext";
import MessageArea from "./MessageArea";

const ChatComponent = ({ selectedChat }) => {
  const { user, loading } = useUser();

  if (loading) return <h1>Loading...</h1>;

  return (
    <SocketProvider id={user.uid}>
      <MessageArea selectedChat={selectedChat} />
    </SocketProvider>
  );
};

export default ChatComponent;
