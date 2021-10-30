import React from "react";
import "./OrdersModal.css";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import SuccessImage from "assets/icons/success-white.png";
import FoodItem from "assets/img/food-item.png";
import CancelImage from "assets/icons/cross-white.png";
import Fab from "@material-ui/core/Fab";
import { PropTypes } from "prop-types";
import SelectBox from "components/SelectBox/SelectBox";

const styles = (theme) => ({
  root: {
    margin: 0,
    borderBottom: "none",
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: "25px",
    top: "25px",
    padding: "0px",
    width: "16px",
    height: "16px",
    color: theme.palette.grey[500],
    "&:hover": {
      background: "transparent",
    },
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { classes, onClose } = props;
  return (
    // <MuiDialogTitle disableTypography className={classes.root} {...other}>
    //   {onClose ? (
    //   ) : null}
    // </MuiDialogTitle>
    <IconButton
      aria-label="close"
      className={classes.closeButton}
      onClick={onClose}
    >
      <CloseIcon />
    </IconButton>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function OrdersModal({ showModal, setShowModal }) {
  return (
    <Dialog
      onClose={() => setShowModal(false)}
      aria-labelledby="customized-dialog-title"
      open={showModal}
      fullWidth="md"
      maxWidth="md"
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={() => setShowModal(false)}
      ></DialogTitle>
      <DialogContent>
        <div className="dailog-container">
          <div className="dailog-left-container">
            <div className="sectionA">
              <h3>Order Details</h3>
              <p>Pending</p>
            </div>
            <div className="sectionB">
              <div className="sectionB-item">
                <h5>Table Number:</h5>
                <p>L01</p>
              </div>
              <div className="sectionB-item">
                <h5>Table Number:</h5>
                <p>L01</p>
              </div>
              <div className="sectionB-item">
                <h5>Table Number:</h5>
                <p>L01</p>
              </div>
              <div className="sectionB-item">
                <h5>Table Number:</h5>
                <p>L01</p>
              </div>
              <div className="sectionB-item">
                <h5>Table Number:</h5>
                <p>L01</p>
              </div>
            </div>
            <div className="sectionC">
              <Fab size="small" color="secondary" aria-label="add">
                <img src={SuccessImage} className="fab-icons" />
              </Fab>
              <Fab
                size="small"
                color="secondary"
                aria-label="add"
                className="sectionC-cancle-image"
              >
                <img src={CancelImage} className="fab-icons" />
              </Fab>
              <SelectBox
                menuList={["today", "tommorrow", "yesterday"]}
                label="Today"
              />
            </div>
          </div>
          <div className="dailog-right-container">
            <div className="sectionA">
              <h3>Item List (3)</h3>
            </div>
            <div className="sectionB">
              <div className="food-item">
                <img src={FoodItem} />
                <div className="food-item-details">
                  <p className="food-item-price">$79.30</p>
                  <p className="food-item-name">
                    Panini-Chichken
                    <div className="food-item-quantity">2</div>
                  </p>
                  <p className="food-item-desc">
                    <b>Notes:</b> Mild Cook for extra toppings
                  </p>
                </div>
              </div>
              <div className="food-item">
                <img src={FoodItem} />
                <div className="food-item-details">
                  <p className="food-item-price">$79.30</p>
                  <p className="food-item-name">
                    Panini-Chichken
                    <div className="food-item-quantity">2</div>
                  </p>
                  <p className="food-item-desc">
                    <b>Notes:</b> Mild Cook for extra toppings
                  </p>
                </div>
              </div>
              <div className="food-item">
                <img src={FoodItem} />
                <div className="food-item-details">
                  <p className="food-item-price">$79.30</p>
                  <p className="food-item-name">
                    Panini-Chichken
                    <div className="food-item-quantity">2</div>
                  </p>
                  <p className="food-item-desc">
                    <b>Notes:</b> Mild Cook for extra toppings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
OrdersModal.propTypes = {
  showModal: PropTypes.boolean,
  setShowModal: PropTypes.Func,
};
