import React from "react";
import "./MenuCard.css";
import FoodItem from "assets/img/food-item.png";
import ItemDetailsModal from "views/ItemDetailsModal/ItemDetailsModal";
import { PropTypes } from "prop-types";

export default function MenuCard() {
  const [showItemDetailsModal, setItemDetailsModal] = React.useState(0);
  return (
    <div className="panini-card-container">
      {[1, 2, 3, 4, 5, 6].map((_, index) => (
        <div className="panini-card" key={index}>
          <div className="panini-img-div">
            <img
              className="panini-img"
              src={FoodItem}
              onClick={() => setItemDetailsModal(true)}
            />
          </div>
          <div className="panini-txt-div">
            <span className="PC-small-font" style={{ color: "green" }}>
              $79.30
            </span>
            <span className="PC-Heading">Panini - Chicken</span>
            <span className="PC-small-font" style={{ color: "grey" }}>
              No Variants
            </span>
          </div>
        </div>
      ))}
      <ItemDetailsModal
        showItemDetailsModal={showItemDetailsModal}
        setItemDetailsModal={setItemDetailsModal}
      />
    </div>
  );
}
MenuCard.propTypes = {
  showItemDetailsModal: PropTypes.boolean,
  setItemDetailsModal: PropTypes.Func,
};
