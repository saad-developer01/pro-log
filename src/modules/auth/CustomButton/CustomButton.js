import React from "react";
import "./CustomButton.css";
import PropTypes from "prop-types";

const CustomButton = ({ title, navigateTo, customStyles }) => {
  return (
    <button
      className="custom-button"
      onClick={() => navigateTo && navigateTo()}
      style={customStyles && customStyles}
    >
      {title}
    </button>
  );
};

CustomButton.propTypes = {
  title: PropTypes.string,
  navigateTo: PropTypes.func,
  customStyles: PropTypes.object,
};

export default CustomButton;
