import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { editUserData } from "../store/actions/editUserActions";

const UserProfile = () => {
  const loginInfo = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: loginInfo.userData.username,
      phoneNumber: loginInfo.userData.phoneNumber,
      password: loginInfo.userData.password,
    },
    onSubmit: (values) => {
      dispatch(editUserData(values));
    },
  });

  const saveUserInfo = () => {
    dispatch(editUserData(formik.values));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <button onClick={() => saveUserInfo()}> Save User Info</button>
      ) : (
        <button onClick={() => setIsEditing(!isEditing)}>
          {" "}
          Edit User Info
        </button>
      )}

      {isEditing ? (
        <form onSubmit={formik.handleSubmit}>
          <label>
            username
            <input
              name="username"
              id="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </label>
          <label>
            phoneNumber
            <input
              name="phoneNumber"
              id="phoneNumber"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
          </label>
          <label>
            password
            <input
              name="password"
              id="password"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </label>
        </form>
      ) : (
        <div>
          <p> username: {loginInfo.userData.username} </p>
          <p> phoneNumber: {loginInfo.userData.phoneNumber} </p>
          <p> password: {loginInfo.userData.password} </p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
