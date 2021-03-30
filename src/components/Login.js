import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
import axios from "axios";

export default function Login(props) {
  const [credentials, setCredentials] = useState({
    username: "admin",
    password: "password",
  });

  const dummyLogin = () => {
    axios
      .post(
        "https://watermyplant-tt7.herokuapp.com/login",
        `grant_type=password&username=${credentials.username}&password=${credentials.password}`,
        {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.access_token);
        // props.history.push("/userinfo");
      });
  };

  return (
    <div>
      <button onClick={() => dummyLogin()}>Login</button>
    </div>
  );
}
