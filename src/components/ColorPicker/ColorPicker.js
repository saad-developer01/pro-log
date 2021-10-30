import React from "react";
import "./ColorPicker.css";
import { TwitterPicker } from "react-color";
import { PropTypes } from "prop-types";

export default function ColorPicker({ customStyle }) {
  const [showColorPicker, setShowColorPicker] = React.useState(false);
  const [colorPickerHexaCode, setColorPickerHexaCode] = React.useState("#000");
  const handleChangeComplete = (color) => {
    setShowColorPicker(false);
    setColorPickerHexaCode(color.hex);
  };
  // const navigateTo = () => setShowCreateMenuModal(true);
  return (
    <div
      className="color-picker-section"
      onClick={() => setShowColorPicker(true)}
      style={customStyle}
    >
      <div
        className="color-picker-display"
        style={
          colorPickerHexaCode && {
            backgroundColor: colorPickerHexaCode,
          }
        }
      ></div>
      <span className="color-picker-hexacode">{colorPickerHexaCode}</span>
      {showColorPicker && (
        <div className="color-picker">
          <TwitterPicker onChangeComplete={handleChangeComplete} />
        </div>
      )}
    </div>
  );
}
ColorPicker.propTypes = {
  customStyle: PropTypes.object,
};
