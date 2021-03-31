import React from "react";
import { NavLink } from "react-router-dom";
import { signOutFunc } from "../../store/actions/loginActions";
import NavBarStyles from "./NavBarStyles";

const NavBar = (props) => {
  const signedIn = true;
  return (
    <NavBarStyles>
      {signedIn ? <NavLink to="/profile">Profile</NavLink> : null}
      {signedIn ? <NavLink to="/myplants">My Plants</NavLink> : null}
      {signedIn ? (
        <NavLink to="/">
          <span onClick={signOutFunc}>Sign Out</span>
        </NavLink>
      ) : null}
    </NavBarStyles>
  );
};

export default NavBar;
