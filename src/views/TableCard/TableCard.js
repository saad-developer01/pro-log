import React from "react";
import "./TableCard.css";
import TableImage from "assets/img/table-image.png";

export default function TableCard() {
  return (
    <div className="table-container">
      {[1, 2, 3, 4, 5, 6].map((_, index) => (
        <div className="card" key={index}>
          <div className="left">
            <img src={TableImage} width="40" height="30" />
          </div>
          <div className="right">
            <div className="card-top">
              <span>4 Persons</span>
              <span className="dot"></span>
              <span className="booked">Booked</span>
            </div>
            <h2>Left Table - L01 </h2>
            <div className="bpara">Download QR</div>
          </div>
        </div>
      ))}
    </div>
  );
}
TableCard.propTypes = {};
