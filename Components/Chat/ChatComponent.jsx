import React from "react";
import { useUser } from "../UserContext";
import SocketProvider from "./SocketContext";
import MessageArea from "./MessageArea";
import Chats from "./Chats";
import { ChatProvider } from "./ChatContext";

const ChatComponent = () => {
  const { user, loading } = useUser();

  if (loading) return <h1>Loading...</h1>;

  console.log(user);

  return (
    <SocketProvider id={user.uid}>
      <ChatProvider>
        <div style={{ display: "flex", width: "100vw" }}>
          <Chats />
          <MessageArea />
        </div>
      </ChatProvider>
    </SocketProvider>
  );
};

export default ChatComponent;
