import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { editUserData } from "../../store/actions/editUserActions";
import SignupSchema from "../validation/formSchema";
import ProfileStyles from "./profileStyling";

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

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setIsEditing(false);
    }
  };

  return (
    <div>
      <ProfileStyles>
        <div className="cardContainer">
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
              <button onClick={() => setIsEditing(false)}> Cancel </button>
            </form>
          ) : (
            <div>
              <p> Username: {loginInfo.userData.username} </p>
              <p> Phone Number: {loginInfo.userData.phoneNumber} </p>
              <p> Password: {loginInfo.userData.password} </p>
              <button onClick={() => setIsEditing(true)}>
                {" "}
                Edit User Info
              </button>
            </div>
          )}
        </div>
      </ProfileStyles>
    </div>
  );
};

export default UserProfile;
