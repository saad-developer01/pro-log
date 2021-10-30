import React from "react";
import "./CreateTableModal.css";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
// import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import QRCodeImage from "assets/img/QR-code.png";
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

export default function CreateTableModal({
  showCreateTableModal,
  setShowCreateTableModal,
}) {
  return (
    <Dialog
      onClose={() => setShowCreateTableModal(false)}
      aria-labelledby="customized-dialog-title"
      open={showCreateTableModal}
      fullWidth="md"
      maxWidth="md"
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={() => setShowCreateTableModal(false)}
      ></DialogTitle>
      <DialogContent>
        <div className="dailog-container">
          <div className="dailog-left-container">
            <div className="sectionA">
              <h3>Create Table</h3>
            </div>
            <div className="sectionB">
              <div className="create-menu-sectionB-item">
                <div className="create-menu-modal-input-sectionA">
                  <p className="create-menu-modal-input-label">Table Name</p>
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
                <div className="create-menu-modal-input-sectionC table-person-input">
                  <p className="create-menu-modal-input-label">Persons</p>
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
                <div className="create-menu-right-first-inner-section3">
                  <button className="create-menu-right-first-inner-section3-button table-generate-code-button">
                    Generate Table QR Code
                  </button>
                </div>
                <div className="create-menu-right-second-section table-action-buttons">
                  <CustomButton
                    title="Create"
                    customStyles={{ width: "131px", marginRight: "20px" }}
                  />
                  <CustomButton
                    title="Cancel"
                    customStyles={{
                      width: "98px",
                      backgroundColor: "#ffffff",
                      color: "#42526E",
                      border: "1px solid rgba(66, 82, 110, 0.7)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="dailog-right-container create-table-right-container">
            <div className="sectionA">
              <h3 className="create-table-qr-title">QR Code Card</h3>
            </div>
            <div className="create-menu-right-first-section qr-code-image">
              <img src={QRCodeImage} />
            </div>
            <div className="create-table-download-pdf">
              <span className>Download PDF Now!</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
CreateTableModal.propTypes = {
  showCreateTableModal: PropTypes.boolean,
  setShowCreateTableModal: PropTypes.Func,
};
