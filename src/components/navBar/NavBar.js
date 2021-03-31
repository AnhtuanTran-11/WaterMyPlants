import React from "react";
import { NavLink } from "react-router-dom";
import { signOutFunc } from "../../store/actions/loginActions";
import NavBarStyles from "./NavBarStyles";
import { useDispatch } from "react-redux";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const signedIn = true;
  return (
    <NavBarStyles>
      {signedIn ? <NavLink to="/profile">Profile</NavLink> : null}
      {signedIn ? <NavLink to="/myplants">My Plants</NavLink> : null}
      {signedIn ? (
        <NavLink to="/">
          <span onClick={() => dispatch(signOutFunc())}>Sign Out</span>
        </NavLink>
      ) : null}
    </NavBarStyles>
  );
};

export default NavBar;
