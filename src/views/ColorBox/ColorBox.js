import React from "react";
import "./ColorBox.css";
import PropTypes from "prop-types";
import DownArrow from "assets/img/down-arrow.png";

export default function ColorBox({ boxes, showArrow, customStyles }) {
  return (
    <>
      {boxes.map((box) => {
        return (
          <div
            className="box"
            style={customStyles && customStyles}
            key={box.number}
          >
            <div
              className="box-backdrop"
              style={{ backgroundColor: box.color }}
            ></div>
            <span className="box-text">
              <h2 style={{ color: box.color }}>{box.number}</h2>
              <p className="color-box-text">
                {box.status}
                {showArrow ? (
                  <img src={DownArrow} className="down-arrow" />
                ) : null}
              </p>
            </span>
          </div>
        );
      })}
    </>
  );
}
ColorBox.propTypes = {
  boxes: PropTypes.Array,
  showArrow: PropTypes.boolean,
  customStyles: PropTypes.object,
};
