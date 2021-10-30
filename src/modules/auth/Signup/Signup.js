import React from "react";
import Sliderlayout from "../Sliderlayout";
import Socialbuttons from "../Socialbuttons";
import CustomButton from "../CustomButton";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import { NavLink } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import "../Auth.css";

const Signup = () => {
  const history = useHistory();
  const navigateTo = () => history.push("/registration");
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
              <NavLink className="links" to={"/login"}>
                Sign in
              </NavLink>
            </h4>
            <div>
              <FormControl size="small" variant="outlined" className="inputs">
                <TextField
                  id="outlined-adornment-password"
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
              <FormControl size="small" variant="outlined" className="inputs">
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
              <FormControl size="small" variant="outlined" className="inputs">
                <TextField
                  id="outlined-adornment-password"
                  type="password"
                  variant="outlined"
                  size="small"
                  placeholder="Re-Type Password"
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
            <CustomButton title="Signup" navigateTo={navigateTo} />
          </div>
          <Socialbuttons />
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {};

export default Signup;
