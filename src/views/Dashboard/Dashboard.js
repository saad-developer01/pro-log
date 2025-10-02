import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import * as Chartist from "chartist";
import "chartist/dist/chartist.min.css";
// // @material-ui/core
// import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";
// // @material-ui/icons
// import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import AccessTime from "@material-ui/icons/AccessTime";
// import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// // core components
// import GridItem from "components/Grid/GridItem.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardIcon from "components/Card/CardIcon.js";
// import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
// import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
} from "variables/charts.js";

// import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
// const useStyles = makeStyles(styles);
import TextField from "@material-ui/core/TextField";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./Dashboard.css";

export default function Dashboard() {
  // const classes = useStyles();
  // Ensure Chartist constructors exist for react-chartist
  if (typeof window !== "undefined") {
    const C = Chartist;
    if (!window.Chartist) window.Chartist = C;
    if (!window.Chartist.Line && C.LineChart) window.Chartist.Line = C.LineChart;
    if (!window.Chartist.Bar && C.BarChart) window.Chartist.Bar = C.BarChart;
    if (!window.Chartist.Pie && C.PieChart) window.Chartist.Pie = C.PieChart;
  }
  const boxes = [
    {
      number: "15",
      status: "Active Order",
      color: "#15C070",
    },
    {
      number: "03",
      status: "Pending",
      color: "#FFB655",
    },
    {
      number: "26",
      status: "Completed",
      color: "#C475EA",
    },
    {
      number: "05",
      status: "Empty Tables",
      color: "#518EF8",
    },
    {
      number: "$5k",
      status: "Cash Payment",
      color: "#FF5652",
    },
    {
      number: "$15k",
      status: "CC Payment",
      color: "#FFD422",
    },
  ];
  return (
    <div className="dashboard-container">
      <div className="section1">
        <div>
          <h3>Dashboard Analytics</h3>
        </div>
        <div>
          <FormControl variant="outlined" className="select-box">
            <InputLabel id="demo-simple-select-outlined-label">
              Today
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              // value={openTime}
              // onChange={(text) => setOpenTime(text)}
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
        </div>
      </div>
      <div style={{ display: "flex", gap: 16, marginTop: 16, flexWrap: "wrap" }}>
        <Card plain style={{ flex: 1, minWidth: 320 }}>
          <CardBody>
            <h3 style={{ marginTop: 0 }}>Dummy Line Chart</h3>
            <ChartistGraph
              data={dailySalesChart.data}
              type="Line"
              options={dailySalesChart.options}
              listener={dailySalesChart.animation}
              className="ct-chart"
              style={{ height: 300 }}
            />
          </CardBody>
        </Card>
        <Card plain style={{ flex: 1, minWidth: 320 }}>
          <CardBody>
            <h3 style={{ marginTop: 0 }}>Dummy Bar Chart</h3>
            <ChartistGraph
              data={emailsSubscriptionChart.data}
              type="Bar"
              options={emailsSubscriptionChart.options}
              responsiveOptions={emailsSubscriptionChart.responsiveOptions}
              listener={emailsSubscriptionChart.animation}
              className="ct-chart"
              style={{ height: 300 }}
            />
          </CardBody>
        </Card>
      </div>
      <div className="section2">
        {boxes.map((box) => {
          return (
            <div className="box" key={box.number}>
              <div
                className="box-backdrop"
                style={{ backgroundColor: box.color }}
              ></div>
              <span className="box-text">
                <h2 style={{ color: box.color }}>{box.number}</h2>
                <p>{box.status}</p>
              </span>
            </div>
          );
        })}
      </div>
      <div className="section3">
        <div>
          <h3>Recent Orders</h3>
        </div>
        <div className="section3-inputs">
          <FormControl variant="outlined" className="select-box">
            <InputLabel id="demo-simple-select-outlined-label">
              Filter
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              // value={openTime}
              // onChange={(text) => setOpenTime(text)}
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
          <TextField
            id="outlined-secondary"
            type="text"
            variant="outlined"
            size="small"
            className="input"
            placeholder="Contact Number"
          />
        </div>
      </div>
      <div>
        <Card plain>
          <CardBody>
            <Table
              tableHead={[
                "Table#",
                "Customer Name",
                "Order List",
                "Order Amount",
                "Order Time",
                "Payment Status",
                "Order Status",
              ]}
              tableData={[
                [
                  "Lo1",
                  "Hammer Zelon",
                  "12 Items",
                  "$125.30",
                  "21:20",
                  "Credit Card",
                  "In Prepration",
                ],
                [
                  "Lo9",
                  "Dave Parker",
                  "12 Items",
                  "$125.30",
                  "21:20",
                  "Cash",
                  "Perding",
                ],
                [
                  "RO7",
                  "Hammer Zelon",
                  "12 Items",
                  "$125.30",
                  "21:20",
                  "Cash",
                  "Ready To Serve",
                ],
              ]}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
Dashboard.propTypes = {};
