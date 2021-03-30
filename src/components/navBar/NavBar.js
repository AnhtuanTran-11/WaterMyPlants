import React from "react";
import { NavLink } from "react-router-dom";
import NavBarStyles from './NavBarStyles';

const NavBar = (props) => {
  const signedIn = true;
  return (
    <NavBarStyles>
      {signedIn ? <NavLink to="/profile">Profile</NavLink> : null}
      {signedIn ? <NavLink to="/myplants">My Plants</NavLink> : null}
      {signedIn ? <NavLink to="/login">Sign Out</NavLink> : null}
    </NavBarStyles>
  );
};

export default NavBar;
