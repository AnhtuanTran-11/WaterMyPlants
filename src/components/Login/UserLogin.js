import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../store/actions/loginActions";
import { useHistory, Link } from "react-router-dom";
import UserLoginStyles from "./UserLoginStyles";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { isLoggedIn, loadingLogin } = useSelector(
    (state) => state.loginReducer
  );
  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setUserData(credentials));
  };

  const handleChange = (e) =>
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/myplants");
    }
  }, [isLoggedIn]);

  return (
    <UserLoginStyles>
      <div className="Login">
        <div className="textContainer">
          <h2 className="loginHeader">Login to your account</h2>
          {loadingLogin ? (
            "LOADING"
          ) : (
            <form className="form" onSubmit={submitHandler}>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Login</button>
            </form>
          )}
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </UserLoginStyles>
  );
};
export default Login;
