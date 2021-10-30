import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { PropTypes } from "prop-types";

const Login = ({ fakeLogin }) => {
  const login = () => {
    fakeLogin();
  };

  return (
    <div>
      <h1>Login</h1>
      <NavLink to={"/signup"}>Signup</NavLink>
      <br />
      <Button variant="outlined" color="primary" onClick={login}>
        Login
      </Button>
    </div>
  );
};

Login.propTypes = {
  fakeLogin: PropTypes.string.isRequired,
};

export default Login;
