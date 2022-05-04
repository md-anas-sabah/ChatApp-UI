import { Button } from "@mui/material";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./Reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="appLogo.jpg" alt="logo" />
        <div className="login__text">
          <h1>
            Sign In To <span className="app__name">Textelope</span>
          </h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In/Login With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
