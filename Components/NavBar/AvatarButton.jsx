import React from "react";
import { useUser } from "../UserContext";
import { Avatar } from "@material-ui/core";
import {useRouter} from 'next/router'

function AvatarButton() {
  const { user, LogOut } = useUser();
  const router = useRouter();

  return (
    <Avatar
      alt={user.displayName}
      src={user.photoURL}
      style={{ width: "10vh", height: "10vh", cursor: "pointer" }}
      onClick={() => router.push('/profile')}
    />
  );
}

export default AvatarButton;
