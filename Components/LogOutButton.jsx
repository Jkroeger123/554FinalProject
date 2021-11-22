import React from "react";
import { useUser } from "./UserContext";

function LogOutButton() {
  const { LogOut } = useUser();
  return <button onClick={LogOut}>Logout</button>;
}

export default LogOutButton;
