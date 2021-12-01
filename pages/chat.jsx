import React from "react";
import UserProvider from "../Components/UserContext";
import ChatComponent from "../Components/Chat/ChatComponent";

function Chat() {
  return (
    <UserProvider>
      <div>
        <ChatComponent />
      </div>
    </UserProvider>
  );
}

export default Chat;
