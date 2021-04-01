import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
export const LOG_IN_START = "LOG_IN_START";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAIL = "LOG_IN_FAIL";
export const FETCH_USER = "FETCH_USER";
export const SIGNIN_IN_START = "SIGNIN_IN_START";
export const SIGNIN_IN_SUCCESS = "SIGNIN_IN_SUCCESS";
export const SIGNIN_IN_FAIL = "SIGNIN_IN_FAIL";

export const SIGN_OUT = "SIGN_OUT";

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
        // console.log(res.data);
        localStorage.setItem("token", res.data.access_token);
        dispatch({ type: LOG_IN_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: LOG_IN_FAIL, payload: err.response.data.error });
      });
  };
};

export const fetchUser = (user) => {
  return (dispatch) => {
    axiosWithAuth()
      .get("/users/getuserinfo")
      .then((res) => {
        // console.log(res);
        dispatch({ type: FETCH_USER, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SIGNIN_IN_FAIL, payload: err });
      });
  };
};

export const signInFunc = (user) => {
  return (dispatch) => {
    dispatch({ type: SIGNIN_IN_START });
    axios
      .post("https://watermyplant-tt7.herokuapp.com/createnewuser", user)
      .then((res) => {
        // console.log(res);
        localStorage.setItem("token", res.data.access_token);
        dispatch({ type: SIGNIN_IN_SUCCESS });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SIGNIN_IN_FAIL, payload: err });
      });
  };
};

export const signOutFunc = (user) => {
  localStorage.removeItem("token");
  return { type: SIGN_OUT };
};
