import React from "react";
import UserProvider from "../Components/UserContext";
import LogOutButton from "../Components/LogOutButton";
import Link from 'next/link'; 

function Dashboard() {
  return (
    <UserProvider>
      <div>
        <h1>Home- Test Staging</h1>
        <Link href="/chat">
          Chat
        </Link>
        <br />
        <LogOutButton />
      </div>
    </UserProvider>
  );
}

export default Dashboard;
