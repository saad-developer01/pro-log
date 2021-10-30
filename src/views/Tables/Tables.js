import React from "react";
import "./Tables.css";
import TextField from "@material-ui/core/TextField";
import CustomButton from "../../modules/auth/CustomButton/index";
import TableCard from "views/TableCard/TableCard";
import { PropTypes } from "prop-types";
import CreateTableModal from "views/CreateTableModal/CreateTableModal";
import SearchIcon from "assets/icons/search-icon.png";

export default function Tables() {
  const [showCreateTableModal, setShowCreateTableModal] = React.useState(0);
  const navigateTo = () => setShowCreateTableModal(true);
  return (
    <div className="tables-container">
      <div className="section1 menu-section1">
        <div>
          <h3>Manage Tables</h3>
        </div>
        <div className="menu-section1-right-section">
          <CustomButton
            title="Create New Table"
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
        <TableCard />
      </div>
      <CreateTableModal
        showCreateTableModal={showCreateTableModal}
        setShowCreateTableModal={setShowCreateTableModal}
      />
    </div>
  );
}
Tables.propTypes = {
  showCreateTableModal: PropTypes.boolean,
  setShowCreateTableModal: PropTypes.Func,
};
