import React from "react";
import UserProvider from "../Components/UserContext";
import ChatComponent from "../Components/ChatComponent";

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
