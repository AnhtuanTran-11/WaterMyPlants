import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { editUserData } from "../store/actions/editUserActions";
import SignupSchema from "./validation/formSchema";

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
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      dispatch(editUserData(values));
      console.log(values);
    },
  });

  console.log(formik);

  return (
    <div>
      <button onClick={() => setIsEditing(!isEditing)}> Edit User Info</button>

      {isEditing ? (
        <form onSubmit={formik.handleSubmit}>
          <button type="submit">submit</button>
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
          {formik.errors.username && <p>{formik.errors.username}</p>}
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
          {formik.errors.phoneNumber && <p>{formik.errors.phoneNumber}</p>}
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
          {formik.errors.password && <p>{formik.errors.password}</p>}
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
