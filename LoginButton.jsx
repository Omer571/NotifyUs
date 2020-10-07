// jshint esversion: 9

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      variant="primary"
      className="feedback-input"
    >
      Log In
    </button>
  );
};

export default LoginButton;
