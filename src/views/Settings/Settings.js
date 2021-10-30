import React from "react";
import "./Settings.css";
// import TextField from "@material-ui/core/TextField";
// import CustomButton from "../../modules/auth/CustomButton/index";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import VectorImage from "assets/img/Vector.png";
import QRCodeSmallImage from "assets/img/qr-code-small.png";
import UploadingImage from "assets/img/fi-rr-upload.png";
import LocationIcon from "assets/icons/location-green-icon.png";
import EyeCrossedIcon from "assets/icons/eye-crossed-icon.png";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import ColorPicker from "components/ColorPicker/ColorPicker";
import SelectBox from "components/SelectBox/SelectBox";
// import MenuCard from "views/MenuCard/MenuCard";

function TabPanel(props) {
  // eslint-disable-next-line react/prop-types
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Settings() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const navigateTo = () => setShowCreateMenuModal(true);
  return (
    <div className="menu-container">
      <div className="menu-tab-container">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          className="tabs menu-tabs"
        >
          <Tab
            label="Restaurant Inforamtion"
            className="settings-tabs"
            {...a11yProps(0)}
          />
          <Tab
            label="Account Settings"
            className="settings-tabs"
            {...a11yProps(1)}
          />
        </Tabs>
        <div className="menu-section2">
          <TabPanel value={value} index={0}>
            <div className="settings-container">
              <div className="settings-container-left-section">
                <h3 className="rest">Restaurant Basic Info</h3>
                <div className="settings-container-input-section">
                  <span className="settings-container-input-label">
                    Business Name
                  </span>
                  <FormControl
                    size="small"
                    variant="outlined"
                    className="settings-container-input"
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
                <div className="settings-container-input-section">
                  <span className="settings-container-input-label">
                    Contact Number
                  </span>
                  <FormControl
                    size="small"
                    variant="outlined"
                    className="settings-container-input"
                  >
                    <TextField
                      id="outlined-adornment-password"
                      type="password"
                      variant="outlined"
                      size="small"
                      placeholder="Re-Type Password"
                      InputProps={{
                        endAdornment: (
                          <img
                            src={EyeCrossedIcon}
                            className="eye-crossed-icon"
                          />
                        ),
                      }}
                    />
                  </FormControl>
                </div>
                <div className="settings-container-input-section">
                  <span className="settings-container-input-label">
                    Restaurant`s Address
                  </span>
                  <FormControl
                    size="small"
                    variant="outlined"
                    className="settings-container-input"
                  >
                    <TextField
                      id="outlined-adornment-password"
                      type="password"
                      variant="outlined"
                      size="small"
                      placeholder="Re-Type Password"
                      InputProps={{
                        endAdornment: (
                          <img
                            src={LocationIcon}
                            className="settings-container-location-icon"
                          />
                        ),
                      }}
                    />
                  </FormControl>
                </div>
                <div className="settings-container-input-section">
                  <span className="settings-container-input-label">
                    Business Type
                  </span>
                  <SelectBox
                    menuList={["today", "tommorrow", "yesterday"]}
                    label="Today"
                    customStyle={{
                      width: "100%",
                      backgroundColor: "#ffffff",
                    }}
                  />
                </div>
                <div className="settings-container-input-section">
                  <span className="settings-container-input-label">
                    Restaurants Timings
                  </span>
                  <div className="settings-container-restaurant-timings-inputs">
                    <FormControl
                      size="small"
                      variant="outlined"
                      className="settings-container-restaurant-timings-input"
                    >
                      <TextField
                        id="outlined-adornment-password"
                        type="password"
                        variant="outlined"
                        size="small"
                        placeholder="Re-Type Password"
                      />
                    </FormControl>
                    <FormControl
                      size="small"
                      variant="outlined"
                      className="settings-container-restaurant-timings-input"
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
                <div className="settings-container-input-section">
                  <span className="settings-container-input-label">
                    Choose Color Theme
                  </span>
                  <ColorPicker customStyle={{ height: "55px" }} />
                </div>
              </div>
              <div className="settings-container-right-section">
                <div className="settings-container-card">
                  <h3>Restaurant Profile Picture</h3>
                  <div className="settings-container-restaurant-profile">
                    <img
                      src={UploadingImage}
                      alt=""
                      width="100px"
                      height="100px"
                    />
                  </div>
                </div>
                <div className="settings-container-card">
                  <h3>Restaurant Cover Picture</h3>
                  <div className="settings-container-restaurant-cover">
                    <img src={VectorImage} alt="" />
                  </div>
                </div>
                <div className="settings-container-card">
                  <h3>Restaurant QR Code</h3>
                  <div className="settings-container-qr-code">
                    <img src={QRCodeSmallImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
Settings.propTypes = {};
