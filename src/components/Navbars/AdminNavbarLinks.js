import React from "react";
// import classNames from "classnames";
// // @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import MenuItem from "@material-ui/core/MenuItem";
// import MenuList from "@material-ui/core/MenuList";
// import Grow from "@material-ui/core/Grow";
// import Paper from "@material-ui/core/Paper";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
// import Hidden from "@material-ui/core/Hidden";
// import Poppers from "@material-ui/core/Popper";
// import Divider from "@material-ui/core/Divider";
// // @material-ui/icons
// import Person from "@material-ui/icons/Person";
// import Notifications from "@material-ui/icons/Notifications";
// import Dashboard from "@material-ui/icons/Dashboard";
// import Search from "@material-ui/icons/Search";
// // core components
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";

import MessageIcon from "assets/icons/message-icon.png";
import BellIcon from "assets/icons/bell-icon.png";
import ProfileIcon from "assets/icons/profile-icon.png";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { PropTypes } from "prop-types";

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  const classes = useStyles();
  // const [openNotification, setOpenNotification] = React.useState(null);
  // const [openProfile, setOpenProfile] = React.useState(null);
  // const handleClickNotification = (event) => {
  //   if (openNotification && openNotification.contains(event.target)) {
  //     setOpenNotification(null);
  //   } else {
  //     setOpenNotification(event.currentTarget);
  //   }
  // };
  // const handleCloseNotification = () => {
  //   setOpenNotification(null);
  // };
  // const handleClickProfile = (event) => {
  //   if (openProfile && openProfile.contains(event.target)) {
  //     setOpenProfile(null);
  //   } else {
  //     setOpenProfile(event.currentTarget);
  //   }
  // };
  // const handleCloseProfile = () => {
  //   setOpenProfile(null);
  // };

  // const logout = () => {
  //   fakeLogin();
  //   setOpenProfile(null);
  // };

  return (
    <div className={classes.navRightSection}>
      <div className={classes.icons}>
        <img src={MessageIcon} className={classes.icon} />
      </div>
      <div className={classes.icons}>
        <img src={BellIcon} className={classes.icon} />
      </div>
      <div className={classes.icons}>
        <img src={ProfileIcon} />
      </div>
      <div></div>
    </div>
  );
}
AdminNavbarLinks.propTypes = {
  fakeLogin: PropTypes.string.isRequired,
};
