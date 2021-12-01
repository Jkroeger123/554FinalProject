import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export function ChatProvider({ children }) {
  const [selectedChat, setSelectedChat] = useState();

  const obj = { selectedChat, setSelectedChat };

  return <ChatContext.Provider value={obj}>{children}</ChatContext.Provider>;
}
