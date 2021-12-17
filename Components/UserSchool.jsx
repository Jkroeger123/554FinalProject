import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useUser } from "./UserContext";
import SelectSchool from "./SelectSchool";

function UserSchool({ setSchool }) {
  const { userData } = useUser();

  useEffect(() => {
    setSchool(userData.school);
  }, [userData]);

  return (
    <Typography variant="h2" sx={{ fontSize: "30px" }}>
      {userData.school ? (
        userData.school
      ) : (
        <SelectSchool setSchool={setSchool} sx={{ width: "500px" }} />
      )}
    </Typography>
  );
}

export default UserSchool;
