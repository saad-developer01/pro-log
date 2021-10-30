import React from "react";
import "./CreateMenuModal.css";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
// import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ImageUploding from "assets/img/Vector.png";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import CustomButton from "../../modules/auth/CustomButton/CustomButton";
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

export default function CreateMenuModal({
  showCreateMenuModal,
  setShowCreateMenuModal,
}) {
  return (
    <Dialog
      onClose={() => setShowCreateMenuModal(false)}
      aria-labelledby="customized-dialog-title"
      open={showCreateMenuModal}
      fullWidth="md"
      maxWidth="md"
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={() => setShowCreateMenuModal(false)}
      ></DialogTitle>
      <DialogContent>
        <div className="dailog-container">
          <div className="dailog-left-container">
            <div className="sectionA">
              <h3>Create menu</h3>
            </div>
            <div className="sectionB">
              <div className="create-menu-sectionB-item">
                <div className="create-menu-modal-image-uploading">
                  <img src={ImageUploding} />
                </div>
                <div className="create-menu-modal-input-sectionA">
                  <p className="create-menu-modal-input-label">Menu Name</p>
                  <FormControl
                    size="small"
                    variant="outlined"
                    className="create-menu-modal-input"
                  >
                    <TextField
                      id="outlined-adornment-password"
                      type="password"
                      variant="outlined"
                      size="small"
                      placeholder="Re-Type Password"
                    />
                  </FormControl>
                </div>
                <div className="create-menu-modal-input-sectionB">
                  <div className="create-menu-modal-input-sectionB-inner-section">
                    <p className="create-menu-modal-input-label">Price</p>
                    <FormControl
                      size="small"
                      variant="outlined"
                      className="create-menu-modal-input"
                    >
                      <TextField
                        id="outlined-adornment-password"
                        type="password"
                        variant="outlined"
                        size="small"
                        placeholder="Re-Type Password"
                      />
                    </FormControl>
                  </div>
                  <div className="create-menu-modal-input-sectionB-inner-section">
                    <p className="create-menu-modal-input-label">
                      Menu Category
                    </p>
                    <FormControl
                      size="small"
                      variant="outlined"
                      className="create-menu-modal-input"
                    >
                      <TextField
                        id="outlined-adornment-password"
                        type="password"
                        variant="outlined"
                        size="small"
                        placeholder="Re-Type Password"
                      />
                    </FormControl>
                  </div>
                </div>
                <div className="create-menu-modal-input-sectionC">
                  <p className="create-menu-modal-input-label">
                    Menu Description
                  </p>
                  <FormControl
                    size="small"
                    variant="outlined"
                    className="create-menu-modal-input"
                  >
                    <TextField
                      id="outlined-adornment-password"
                      type="password"
                      variant="outlined"
                      size="small"
                      placeholder="Re-Type Password"
                    />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
          <div className="dailog-right-container">
            <div className="sectionA">
              <h3>Add Ons</h3>
            </div>
            <div className="create-menu-right-section">
              <div className="create-menu-right-first-section">
                <div className="create-menu-right-first-inner-section1">
                  <p className="create-menu-modal-input-label">Addon Name</p>
                  <TextField
                    id="outlined-adornment-password"
                    type="password"
                    variant="outlined"
                    size="small"
                    placeholder="Name"
                    className="create-menu-modal-input"
                  />
                </div>
                <div className="create-menu-right-first-inner-section2">
                  <p className="create-menu-modal-input-label">Price</p>
                  <TextField
                    id="outlined-adornment-password"
                    type="password"
                    variant="outlined"
                    size="small"
                    placeholder="$$$"
                    className="create-menu-modal-input"
                  />
                </div>
                <div className="create-menu-right-first-inner-section3">
                  <button className="create-menu-right-first-inner-section3-button">
                    Add More Add Ons
                  </button>
                </div>
              </div>
              <div className="create-menu-right-second-section">
                <CustomButton
                  title="Cancel"
                  customStyles={{
                    width: "98px",
                    backgroundColor: "#ffffff",
                    color: "#42526E",
                    border: "1px solid rgba(66, 82, 110, 0.7)",
                    marginRight: "20px",
                  }}
                />
                <CustomButton
                  title="Create"
                  customStyles={{ width: "131px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
CreateMenuModal.propTypes = {
  showCreateMenuModal: PropTypes.boolean,
  setShowCreateMenuModal: PropTypes.Func,
};
