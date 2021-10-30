import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <NavLink to={"/login"}>Login</NavLink>
    </div>
  );
};

Signup.propTypes = {};

export default Signup;
