import React from "react";
import "./Menu.css";
import TextField from "@material-ui/core/TextField";
import CustomButton from "../../modules/auth/CustomButton/index";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CreateMenuModal from "views/CreateMenuModal/CreateMenuModal";
import MenuCard from "views/MenuCard/MenuCard";
import SearchIcon from "assets/icons/search-icon.png";

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

export default function Menu() {
  const [showCreateMenuModal, setShowCreateMenuModal] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigateTo = () => setShowCreateMenuModal(true);
  return (
    <div className="menu-container">
      <div className="section1 menu-section1">
        <div>
          <h3>Manage Menu</h3>
        </div>
        <div className="menu-section1-right-section">
          <CustomButton
            title="Create New Menu"
            navigateTo={navigateTo}
            customStyles={{
              width: "175px",
              height: "36px",
              borderRadius: "8px",
              padding: "0",
            }}
          />
          <TextField
            id="outlined-secondary"
            type="text"
            variant="outlined"
            size="small"
            className="menu-section1-right-section-input"
            placeholder="Search"
            InputProps={{
              startAdornment: <img src={SearchIcon} className="search-icon" />,
            }}
          />
        </div>
      </div>
      <div className="menu-tab-container">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          className="tabs menu-tabs"
        >
          <Tab label="Breakfast" className="menu-tabs" {...a11yProps(0)} />
          <Tab label="Main Course" className="menu-tabs" {...a11yProps(1)} />
          <Tab label="Italian" className="menu-tabs" {...a11yProps(2)} />
          <Tab label="Chinese" className="menu-tabs" {...a11yProps(3)} />
          <Tab label="Burgers" className="menu-tabs" {...a11yProps(4)} />
          <Tab label="Steaks" className="menu-tabs" {...a11yProps(5)} />
          <Tab label="Sidelines" className="menu-tabs" {...a11yProps(6)} />
          <Tab label="Drinks" className="menu-tabs" {...a11yProps(7)} />
        </Tabs>
        <div className="menu-section2">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((num, index) => (
            <TabPanel value={value} index={num} key={index}>
              <MenuCard />
            </TabPanel>
          ))}
        </div>
      </div>
      <CreateMenuModal
        showCreateMenuModal={showCreateMenuModal}
        setShowCreateMenuModal={setShowCreateMenuModal}
      />
    </div>
  );
}
Menu.propTypes = {};
