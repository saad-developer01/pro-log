import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Login from "./../modules/auth/Login/index";
import Signup from "./../modules/auth/Signup/index";
import RegistrationSteps from "./../modules/auth/RegistrationSteps/index";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import { PropTypes } from "prop-types";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Navigation = ({
  appInitialized,
  initialLoading,
  isLoggedIn,
  callInProcess,
}) => {
  const classes = useStyles();
  useEffect(() => {
    setTimeout(() => {
      appInitialized(false);
    }, 1000);
  }, []);

  if (initialLoading) {
    return (
      <Backdrop className={classes.backdrop} open={initialLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route path="/admin" component={Admin} />
            <Route path="/rtl" component={RTL} />
            <Redirect from="/" to="/admin/dashboard" />
          </>
        ) : (
          <>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/registration" component={RegistrationSteps} />
            <Redirect from="/" to="/login" />
          </>
        )}
      </Switch>
      <Backdrop className={classes.backdrop} open={callInProcess}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

Navigation.propTypes = {
  initialLoading: PropTypes.string.isRequired,
  appInitialized: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.string.isRequired,
  callInProcess: PropTypes.bool.isRequired,
};

export default Navigation;
