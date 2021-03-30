import { axiosWithAuth } from "../../utils/axiosWithAuth";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAIL = "EDIT_FAIL";

export const editUserData = (user) => {
  return (dispatch) => {
    axiosWithAuth()
      .put("https://jsonplaceholder.typicode.com//posts/1", user)
      .then((res) => {
        console.log(res);
        dispatch({ type: EDIT_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: EDIT_FAIL, payload: err });
      });
  };
};
