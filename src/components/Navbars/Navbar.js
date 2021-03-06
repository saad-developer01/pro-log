import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import AdminNavbarLinks from "./index.js";
import RTLNavbarLinks from "./RTLNavbarLinks.js";
// import Button from "components/CustomButtons/Button.js";
// import DehazeIcon from "@material-ui/icons/Dehaze";

//hooks
// import { useRouteName } from "hooks";

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";
// import LogInput from "components/LogInput/LogInput.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  // const routeName = useRouteName();
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color,
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      {/* <LogInput /> */}
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* <DehazeIcon size="small" className={classes.icon} /> */}
          {/* Here we create navbar brand, based on route name */}
          <div className={classes.title}>
            {/* <h4>Welcome,</h4> */}
            {/* <h4 className={classes.titleName}>Welcome</h4> */}
          </div>
        </div>
        <Hidden smDown implementation="css">
          {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};
