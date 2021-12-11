import React from "react";
import UserProvider from "../Components/UserContext";
import LogOutButton from "../Components/LogOutButton";

function Dashboard() {
  return (
    <UserProvider>
      <div>
        <h1>Home</h1>
        <a href="/chat">Chat</a>
        <LogOutButton />
      </div>
    </UserProvider>
  );
}

export default Dashboard;
