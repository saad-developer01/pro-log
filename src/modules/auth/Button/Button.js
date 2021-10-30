import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

const CustomButton = ({ title, navigateTo }) => {
  return <button onClick={() => navigateTo && navigateTo()}>{title}</button>;
};

CustomButton.propTypes = {
  title: PropTypes.string,
  navigateTo: PropTypes.func,
};

export default CustomButton;
