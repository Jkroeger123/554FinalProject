import React from "react";
import { signInWithGoogle } from "../../Utils/firebase";
import { Button } from "@mui/material";

function SignInButton() {
  const OnGooglePressed = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginTop: "auto", marginBottom: "auto" }}>
      <Button
        onClick={OnGooglePressed}
        sx={{ color: "white", fontSize: "20px" }}
      >
        Sign In With Google
      </Button>
    </div>
  );
}

export default SignInButton;
