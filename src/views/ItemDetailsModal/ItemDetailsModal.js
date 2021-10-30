import React from "react";
import "./ItemDetailsModal.css";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
// import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DeleteImage from "assets/icons/delete.png";
import EditImage from "assets/icons/edit.png";
import DownArrow from "assets/icons/down-arrow.png";
import { PropTypes } from "prop-types";

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

export default function ItemDetailsModal({
  showItemDetailsModal,
  setItemDetailsModal,
}) {
  return (
    <Dialog
      onClose={() => setItemDetailsModal(false)}
      aria-labelledby="customized-dialog-title"
      open={showItemDetailsModal}
      fullWidth="md"
      maxWidth="md"
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={() => setItemDetailsModal(false)}
      ></DialogTitle>
      <DialogContent>
        <div className="item-details-main">
          <div className="item-details-left">
            <div className="item-details-img-div">
              <img
                className="item-details-img"
                src="https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/137907782/ginger.jpg?resize=640,468&quality=82&strip=all"
              />
            </div>
            <div className="item-details-sub-main">
              <div className="item-details-RuskFlusk">
                <span className="item-details-heading">Rusk Flusk</span>
                <span className="item-details-OutOfOrder">Out of Stock</span>
              </div>
              <p className="item-details-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <div className="item-details-btn-div">
                <button className="btn-pad-rad btn-edit">Edit</button>
                <button className="btn-pad-rad btn-status">
                  <span>Status</span>
                  <span>
                    <img className="dropdown-img" src={DownArrow} />
                  </span>
                </button>
                <img className="left-trash-img" src={DeleteImage} />
              </div>
            </div>
          </div>
          <div className="item-details-right">
            <div className="item-details-details">
              <div className="item-details-right-heading">Details</div>
              <div className="item-details-right-content">
                <div className="item-details-right-top">
                  <div className="item-details-right-top-label">
                    Order Amount:
                  </div>
                  <div className="greenCSS">$157.30</div>
                </div>
                <div className="item-details-right-top">
                  <div className="item-details-right-top-label">
                    Menu Category:
                  </div>
                  <div className="breakfast-div">
                    <span className="greyCSS">Breakfast</span>
                    <span className="down-arrow-break-fast">
                      <img src={DownArrow} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-details-addOns">
              <span className="item-details-right-heading">Add Ons</span>
              <div className="item-details-right-content">
                <div className="addOn-main">
                  <div className="greyCSS">Addon 1</div>
                  <div className="addOn-middle-div">
                    <div className="greenCSS">$157.30</div>
                    <div className="addOn-below-green">Mozzerla Cheese</div>
                  </div>
                  <div className="addOn-img-div">
                    <img className="addOn-img-icon" src={EditImage} />
                    <img className="left-trash-img" src={DeleteImage} />
                  </div>
                </div>
                <div className="addOn-main">
                  <div className="greyCSS">Addon 1</div>
                  <div className="addOn-middle-div">
                    <div className="greenCSS">$157.30</div>
                    <div className="addOn-below-green">Mozzerla Cheese</div>
                  </div>
                  <div className="addOn-img-div">
                    <img className="addOn-img-icon" src={EditImage} />
                    <img className="left-trash-img" src={DeleteImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
ItemDetailsModal.propTypes = {
  showItemDetailsModal: PropTypes.boolean,
  setItemDetailsModal: PropTypes.Func,
};
