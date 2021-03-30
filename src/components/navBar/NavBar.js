import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const signedIn = true;
  return (
    <div>
      <h1>NavBar</h1>
      {signedIn ? <NavLink to="/profile">Profile</NavLink> : null}
      {signedIn ? <NavLink to="/login">Sign Out</NavLink> : null}
    </div>
  );
};

export default NavBar;
