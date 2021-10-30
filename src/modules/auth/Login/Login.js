import React from "react";
import { PropTypes } from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import styles from "./loginStyle.js";
import "../Auth.css";
import Sliderlayout from "../Sliderlayout";
import Socialbuttons from "../Socialbuttons";
import CustomButton from "../Button";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import { NavLink } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import TextField from "@material-ui/core/TextField";
// const useStyles = makeStyles(styles);

const Login = ({ fakeLogin }) => {
  // const classes = useStyles();
  // const login = () => {
  //   fakeLogin();
  // };

  return (
    <div className="container">
      <div className="slider">
        <Sliderlayout />
      </div>
      <div className="login">
        <div className="login-container">
          <div className="login-inner-container">
            <h2>Hey</h2>
            <h2>Login Now</h2>
            <h4>
              Alredy have account/
              <NavLink className="links" to={"/signup"}>
                Create Account
              </NavLink>
            </h4>
            <div>
              <FormControl variant="outlined" className="inputs">
                <TextField
                  id="outlined-secondary"
                  type="text"
                  variant="outlined"
                  size="small"
                  placeholder="Username or Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <FormControl variant="outlined" className="inputs">
                <TextField
                  id="outlined-adornment-password"
                  type="password"
                  variant="outlined"
                  size="small"
                  placeholder="Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </div>
            <p>
              Forgot Password?
              <NavLink className="links" to={"/"}>
                Reset Now
              </NavLink>
            </p>
            <CustomButton title="Login" navigateTo={fakeLogin} />
          </div>
          <Socialbuttons />
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  fakeLogin: PropTypes.string.isRequired,
};

export default Login;
