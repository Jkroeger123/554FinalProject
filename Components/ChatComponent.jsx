import React from "react";
import { useUser } from "./UserContext";
import SocketProvider from "./SocketContext";
import MessageArea from "./MessageArea";

const ChatComponent = () => {
  const { user, loading } = useUser();

  if (loading) return <h1>Loading...</h1>;

  console.log(user);

  return (
    <SocketProvider id={user.uid}>
      <div>
        <h1>Chat</h1>
        <MessageArea />
      </div>
    </SocketProvider>
  );
};

export default ChatComponent;
