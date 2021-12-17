import React from "react";
import { useUser } from "../UserContext";
import SocketProvider from "./SocketContext";
import MessageArea from "./MessageArea";

const ChatComponent = ({ selectedChat }) => {
  const { user } = useUser();

  return (
    <SocketProvider id={user.uid}>
      <MessageArea selectedChat={selectedChat} />
    </SocketProvider>
  );
};

export default ChatComponent;
