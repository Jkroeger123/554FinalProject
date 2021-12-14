import React from "react";
import { useUser } from "../UserContext";
import { Avatar } from "@material-ui/core";

function AvatarButton() {
  const { user, LogOut } = useUser();

  return (
    <Avatar
      alt={user.displayName}
      src={user.photoURL}
      style={{ width: "10vh", height: "10vh", cursor: "pointer" }}
      onClick={LogOut}
    />
  );
}

export default AvatarButton;
