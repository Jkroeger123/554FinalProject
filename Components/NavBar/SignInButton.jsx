import React from "react";
import { signInWithGoogle } from "../../Utils/firebase";
import GoogleButton from "react-google-button";

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
      <GoogleButton onClick={OnGooglePressed}>Sign In With Google</GoogleButton>
    </div>
  );
}

export default SignInButton;
