import React from "react";
import "./Socialbuttons.css";
// import Stack from "@material-ui/core/Stack";
import Button from "@material-ui/core/Button";
import FacebookIcon from "assets/img/facebook.png";
import GoogleIcon from "assets/img/google.png";

const Socialbuttons = () => {
  return (
    <div className="social-button-container">
      <h3>Connect Via Social</h3>
      <div className="buttons-list">
        <Button
          variant="outlined"
          color="primary"
          className="facebook-button btn"
        >
          <img src={FacebookIcon} />
          Facebook
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className="google-button btn"
        >
          <img src={GoogleIcon} />
          Google
        </Button>
      </div>
    </div>
  );
};

Socialbuttons.propTypes = {};

export default Socialbuttons;
