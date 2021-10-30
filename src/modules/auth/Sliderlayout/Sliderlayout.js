import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider1 from "assets/img/slider1.jpg";
import Slider2 from "assets/img/slider2.jpg";
import Slider3 from "assets/img/slider3.jpg";
import Logo from "assets/img/logo.png";
import "./Sliderlayout.css";

const Sliderlayout = () => {
  return (
    <Carousel
      showThumbs={false}
      useKeyboardArrows
      autoFocus={true}
      showArrows={false}
      dynamicHeight={true}
      // autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      className="presentation-mode"
    >
      {[Slider1, Slider2, Slider3].map((slide, index) => (
        <div className="image-container" key={index}>
          <div className="back-drop"></div>
          <img src={slide} />
          <div className="logo-text">
            <img src={Logo} />
          </div>
          <div className="text">
            <h2>Hungary? You are in the right place</h2>
            <p className="text">
              We will serve you food as quickly and qualitivly possible
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

Sliderlayout.propTypes = {};

export default Sliderlayout;
