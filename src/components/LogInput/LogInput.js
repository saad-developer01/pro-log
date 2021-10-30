import React from "react";

import "./LogInput.css";

const LogInput = () => {
  return (
    <div className="main">
      <input type="text" placeholder="What are you working on?" />
      <div className="toggle-btn">
        <label className="switch">
          <input type="checkbox" />
          <span className="sliderrr round"></span>
        </label>
      </div>
    </div>
  );
};

export default LogInput;
