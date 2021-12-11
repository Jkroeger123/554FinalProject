import React, { createContext, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { auth, logout } from "../Utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export default function UserProvider(props) {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    //If the user is not authorized, kick them to the home page
    if (loading) return;
    if (!user) return router.push("/");

    const fetch = async () => {
      let token = await auth.currentUser.getIdToken();
      let { data } = await axios.post(`/api/user`, {
        idToken: token,
        message: {},
      });
      console.log(data);
    };

    fetch();
  }, [user, loading]);

  const LogOut = async () => {
    logout();
  };

  let contextObj = {
    user,
    loading,
    LogOut,
  };

  //If the user is not authorized or is loading, dont render children (they depend on that info)
  if (!user || loading) return <></>;

  //If they are authorized and in the database, render the children
  return (
    <UserContext.Provider value={contextObj}>
      {props.children}
    </UserContext.Provider>
  );
}
