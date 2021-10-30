import React from "react";
import "./RegistrationSteps.css";
import "../Auth.css";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CustomButton from "../CustomButton";
import StepButton from "@material-ui/core/StepButton";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ImageUploding from "assets/img/Vector.png";
import SuccessImage from "assets/img/success.png";
import CancelImage from "assets/img/cancel.png";
import Logo from "assets/img/logo.png";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LocationIcon from "assets/icons/location-green-icon.png";
import EyeCrossedIcon from "assets/icons/eye-crossed-icon.png";
import ColorPicker from "components/ColorPicker/ColorPicker";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    completed: {
      display: "inline-block",
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

const RegistrationSteps = () => {
  const classes = useStyles();
  function getSteps() {
    return ["Info", "Profile Pics", "Subscription"];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div className="content-container">
            <h2>Setting Up Your Business</h2>
            <div className="forms">
              <div className="input-form">
                <p>Business Name</p>
                <TextField
                  id="outlined-secondary"
                  type="text"
                  variant="outlined"
                  size="small"
                  className="input"
                  placeholder="Business Name"
                />
              </div>
              <div className="input-form">
                <p>Business Type</p>
                <TextField
                  id="outlined-secondary"
                  type="text"
                  variant="outlined"
                  size="small"
                  className="input"
                  placeholder="Business Type"
                />
              </div>
              <div className="input-form">
                <p>Contact Number</p>
                <TextField
                  id="outlined-secondary"
                  type="text"
                  variant="outlined"
                  size="small"
                  className="input"
                  placeholder="Contact Number"
                  InputProps={{
                    endAdornment: (
                      <img src={EyeCrossedIcon} className="eye-crossed-icon" />
                    ),
                  }}
                />
              </div>
              <div className="input-form">
                <p>Restaurants Timing</p>
                <div className="select-box-container">
                  <FormControl variant="outlined" className="select-box">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Opening Time
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={openTime}
                      onChange={(text) => setOpenTime(text)}
                      label="Opening Time"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="outlined" className="select-box">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Closing Time
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={closeTime}
                      onChange={(text) => setCloseTime(text)}
                      label="Closing Time"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="input-form">
                <p>Restaurant`s Address</p>
                <TextField
                  id="outlined-secondary"
                  type="text"
                  variant="outlined"
                  size="small"
                  className="input"
                  placeholder="Business Name"
                  InputProps={{
                    endAdornment: (
                      <img
                        src={LocationIcon}
                        className="settings-container-location-icon"
                      />
                    ),
                  }}
                />
              </div>
              <div className="input-form">
                <p>Chooose Theme Color</p>
                <ColorPicker customStyle={{ height: "45px" }} />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="content-container">
            <h2>Setting Up Your Business</h2>
            <div className="profile-pic-section">
              <div className="display-image-section">
                <div className="image-uploading">
                  <img src={ImageUploding} />
                </div>
                <div className="image-uploading-input">
                  <p>Upload Restaurant Logo</p>
                  <TextField
                    id="outlined-secondary"
                    type="text"
                    variant="outlined"
                    size="small"
                    className="input"
                    placeholder="Business Name"
                  />
                  <div>
                    <CustomButton title="Upload" />
                  </div>
                </div>
              </div>
              <div className="display-image-section">
                <div className="image-uploading-cover">
                  <img src={ImageUploding} />
                </div>
                <div className="image-uploading-input">
                  <p>Upload Cover Image</p>
                  <TextField
                    id="outlined-secondary"
                    type="text"
                    variant="outlined"
                    size="small"
                    className="input"
                    placeholder="Business Name"
                  />
                  <div>
                    <CustomButton title="Upload" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="content-container">
            <h2>Buy Subscription</h2>
            <div className="card-container-section">
              <Card className="card-container">
                <CardContent className="card-container-content">
                  <div className="section-1">
                    <Typography variant="h5" component="h3">
                      Free
                    </Typography>
                  </div>
                  <div className="section-2">
                    <Typography className={classes.pos} color="textSecondary">
                      <img src={SuccessImage} className="icons" />
                      Analytics
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      <img src={SuccessImage} className="icons" />
                      Payment Management
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      <img src={CancelImage} className="icons" />
                      Waiter Management
                    </Typography>
                  </div>
                  <div className="section-3">
                    <Typography variant="body2" component="p">
                      Selected
                    </Typography>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-container">
                <CardContent className="card-container-content">
                  <div className="section-1">
                    <Typography variant="h5" component="h3">
                      $19
                    </Typography>
                  </div>
                  <div className="section-2">
                    <Typography className={classes.pos} color="textSecondary">
                      <img src={SuccessImage} className="icons" />
                      Analytics
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      <img src={SuccessImage} className="icons" />
                      Payment Management
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      <img src={CancelImage} className="icons" />
                      Waiter Management
                    </Typography>
                  </div>
                  <div className="section-3">
                    <Typography variant="body2" component="p">
                      Buy Now
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      default:
        return "Unknown step";
    }
  }
  const [activeStep, setActiveStep] = React.useState(0);
  const [openTime, setOpenTime] = React.useState("");
  const [closeTime, setCloseTime] = React.useState("");
  // const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  // const totalSteps = () => {
  //   return steps.length;
  // };

  // const completedSteps = () => {
  //   return Object.keys(completed).length;
  // };

  // const isLastStep = () => {
  //   return activeStep === totalSteps() - 1;
  // };

  // const allStepsCompleted = () => {
  //   return completedSteps() === totalSteps();
  // };

  // const handleNext = () => {
  //   const newActiveStep =
  //     isLastStep() && !allStepsCompleted()
  //       ? // It's the last step, but not all steps have been completed,
  //         // find the first step that has been completed
  //         steps.findIndex((step, i) => !(i in completed))
  //       : activeStep + 1;
  //   setActiveStep(newActiveStep);
  // };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  //   setCompleted({});
  // };
  return (
    <div className={classes.root + " container"}>
      <div className="stepper">
        <div className="stepper-logo-section">
          <img src={Logo} />
        </div>
        <Stepper
          nonLinear
          activeStep={activeStep}
          className="stepper-navigation-section"
          orientation="vertical"
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton
                onClick={handleStep(index)}
                // completed={completed[index]}
              >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className="stepper-content">
        <Typography className={classes.instructions}>
          {getStepContent(activeStep)}
        </Typography>
        <div className="buttons-section">
          {activeStep !== 0 ? (
            <div>
              <Button onClick={handleBack} className={classes.button}>
                Back
              </Button>
            </div>
          ) : (
            <div>
              <Button onClick={handleNext} className={classes.button}>
                Skip For Now
              </Button>
            </div>
          )}
          <div>
            {activeStep !== 0 ? (
              <Button onClick={handleNext} className={classes.button}>
                Skip For Now
              </Button>
            ) : null}
            <CustomButton title={activeStep === 2 ? "Done" : "Next"} />
          </div>
          {/* {activeStep !== steps.length &&
            (completed[activeStep] ? (
              <Typography variant="caption" className={classes.completed}>
                Step {activeStep + 1} already completed
              </Typography>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleComplete}
              >
                {completedSteps() === totalSteps() - 1
                  ? "Finish"
                  : "Complete Step"}
              </Button>
            ))} */}
        </div>
      </div>
    </div>
  );
};

RegistrationSteps.propTypes = {};

export default RegistrationSteps;
