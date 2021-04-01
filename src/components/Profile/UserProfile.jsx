import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { editUserData } from "../../store/actions/editUserActions";
import SignupSchema from "../validation/formSchema";
import ProfileStyles from "./profileStyling";
import { fetchUser } from "../../store/actions/loginActions";

const UserProfile = () => {
  const loginInfo = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // console.log("fetchUSER dispatched");
    dispatch(fetchUser());
  }, [dispatch]);

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
            <Formik
              initialValues={{
                username: loginInfo.userData.username,
                phoneNumber: loginInfo.userData.phoneNumber,
                password: loginInfo.userData.password,
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log(values);
                dispatch(editUserData(loginInfo.userData.userid, values));
              }}
            >
              <Form className="formcontainer">
                <label htmlFor="username">Username</label>
                <Field name="username" type="text" />
                <ErrorMessage name="username" />

                <label htmlFor="password">Password</label>
                <Field name="password" type="text" />
                <ErrorMessage name="password" />

                <button onClick={() => setIsEditing(false)}> Cancel </button>

                <button type="submit">Submit</button>
              </Form>
            </Formik>
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
