import { axiosWithAuth } from "../../utils/axiosWithAuth";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAIL = "EDIT_FAIL";

export const editUserData = (id, user) => {
  return (dispatch) => {
    axiosWithAuth()
      .patch(`https://watermyplant-tt7.herokuapp.com/users/user/${id}`, user)
      .then((res) => {
        console.log(res);
        dispatch({ type: EDIT_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: EDIT_FAIL, payload: err });
      });
  };
};
