import React from "react";
import UserProvider from "../Components/UserContext";
import Chats from "../Components/Chat/Chats";

function Chat() {
  return (
    <UserProvider protectedRoute>
      <Chats />
    </UserProvider>
  );
}

export default Chat;
