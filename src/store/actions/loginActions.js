import axios from "axios";

export const LOG_IN_START = "LOG_IN_START";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAIL = "LOG_IN_FAIL";

// export const SIGN_OUT = "SIGN_OUT";

export const setUserData = (user) => {
  return (dispatch) => {
    dispatch({ type: LOG_IN_START });
    axios
      .post("https://jsonplaceholder.typicode.com/post", user)
      .then((res) => {
        console.log(res);
        dispatch({ type: LOG_IN_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: LOG_IN_FAIL, payload: err });
      });
  };
};
