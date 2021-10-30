import React, { useState } from "react";

import "./LogInput.css";

const LogInput = () => {
  const [toggleLog, setToggle] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addLog = (e) => {
    if (e.key === "Enter") {
      setToggle([...toggleLog, e.target.value]);
      setInputValue("");
    }
  };

  return (
    <>
      <div className="main">
        <input
          type="text"
          placeholder="What are you working on?"
          onKeyPress={addLog}
          onChange={(text) => {
            setInputValue(text.target.value);
            console.log(text.target.value);
          }}
          value={inputValue}
        />
        <div className="toggle-btn">
          <label className="switch">
            <input type="checkbox" />
            <span className="sliderrr round"></span>
          </label>
        </div>
      </div>
      <div className="showLogs">
        {toggleLog.map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </div>
    </>
  );
};

export default LogInput;
