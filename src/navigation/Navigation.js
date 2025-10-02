import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
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
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
      <div className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </div>
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
      {callInProcess && (
        <div className={classes.backdrop}>
          <CircularProgress color="inherit" />
        </div>
      )}
    </>
  );
};

Navigation.propTypes = {
  initialLoading: PropTypes.bool.isRequired,
  appInitialized: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  callInProcess: PropTypes.bool.isRequired,
};

export default Navigation;
