import React from "react";
import "./SelectBox.css";
import { PropTypes } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function SelectBox({ menuList, label, customStyle }) {
  const BootstrapInput = withStyles((theme) => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        border: "1px solid #15C070",
        // borderColor: "#80bdff",
        // boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }))(InputBase);
  const [date, setDate] = React.useState(0);
  const handleChange = (event) => {
    console.log("on change -->> ", event.target.value);
    console.log("", menuList);
    setDate(event.target.value);
  };
  return (
    <FormControl>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={date}
        onChange={handleChange}
        style={customStyle}
        input={<BootstrapInput />}
      >
        <MenuItem value={0}>{label}</MenuItem>
        {menuList.map((item, index) => (
          <MenuItem value={index + 1} key={index}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
SelectBox.propTypes = {
  menuList: PropTypes.Array,
  label: PropTypes.string,
  customStyle: PropTypes.object,
};
