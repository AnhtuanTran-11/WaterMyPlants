import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import StyledComponent from "./StyledComponent";

const NavBar = (props) => {
  const signedIn = true;
  console.log(props);
  return (
    <div>
    <h1>NavBar</h1>
    {signedIn ? <NavLink to='/profile'>Profile</NavLink> : null}
    {signedIn ? <NavLink to='/login'>Sign Out</NavLink> : null}
  </div>
  );
};

export default NavBar;