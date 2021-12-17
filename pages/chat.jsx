import React from "react";
import UserProvider from "../Components/UserContext";
import { useUser } from "../Components/UserContext";
import Chats from "../Components/Chat/Chats";
import SocketProvider from "../Components/Chat/SocketContext";

function Chat() {
  return (
    <UserProvider protectedRoute>
      <ChatSocket>
        <Chats />
      </ChatSocket>
    </UserProvider>
  );
}

//Temp Solution
function ChatSocket({ children }) {
  const { user } = useUser();

  return <SocketProvider id={user.uid}>{children}</SocketProvider>;
}

export default Chat;
