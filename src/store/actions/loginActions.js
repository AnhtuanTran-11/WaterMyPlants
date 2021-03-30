import axios from "axios";

export const LOG_IN_START = "LOG_IN_START";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAIL = "LOG_IN_FAIL";

// export const SIGN_OUT = "SIGN_OUT";

export const setUserData = (user) => {
  return (dispatch) => {
    dispatch({ type: LOG_IN_START });
    axios
      .post(
        "https://watermyplant-tt7.herokuapp.com/login",
        `grant_type=password&username=${user.username}&password=${user.password}`,
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
        dispatch({ type: LOG_IN_SUCCESS, payload: user });
      })
      .catch((err) => {
        dispatch({ type: LOG_IN_FAIL, payload: err });
      });
  };
};
