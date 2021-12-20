import React from "react";
import { useUser } from "./UserContext";
import { Button } from "@mui/material";

function LogOutButton() {
  const { LogOut } = useUser();
  return <Button onClick={LogOut}>Logout</Button>;
}

export default LogOutButton;
