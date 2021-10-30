import React from "react";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
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

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "variables/charts.js";

// import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
// const useStyles = makeStyles(styles);
import "./Orders.css";
import TextField from "@material-ui/core/TextField";
// import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import OrdersModal from "views/OrdersModal/OrdersModal";
import SearchIcon from "assets/icons/search-icon.png";
import SelectBox from "components/SelectBox/SelectBox";

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

const columns = [
  { id: "table", label: "Table#", minWidth: 100 },
  { id: "customerName", label: "Customer Name", minWidth: 120 },
  {
    id: "orderList",
    label: "Order List",
    minWidth: 120,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "orderAmount",
    label: "Order Amount",
    minWidth: 120,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "orderTime",
    label: "Order Time",
    minWidth: 120,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "paymentStatus",
    label: "Payment Status",
    minWidth: 120,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "orderStatus",
    label: "Order Status",
    minWidth: 120,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  table,
  customerName,
  orderList,
  orderAmount,
  orderTime,
  paymentStatus,
  orderStatus
) {
  return {
    table,
    customerName,
    orderList,
    orderAmount,
    orderTime,
    paymentStatus,
    orderStatus,
  };
}

const rows = [
  createData(
    "l01",
    "Hamer Zelon",
    "12 Items",
    "$125",
    "21:20",
    "Credit Card",
    "In Preparation"
  ),
  createData(
    "l01",
    "Hamer Zelon",
    "12 Items",
    "$125",
    "21:20",
    "Credit Card",
    "In Preparation"
  ),
  createData(
    "l01",
    "Hamer Zelon",
    "12 Items",
    "$125",
    "21:20",
    "Credit Card",
    "In Preparation"
  ),
  createData(
    "l01",
    "Hamer Zelon",
    "12 Items",
    "$125",
    "21:20",
    "Credit Card",
    "In Preparation"
  ),
  createData(
    "l01",
    "Hamer Zelon",
    "12 Items",
    "$125",
    "21:20",
    "Credit Card",
    "In Preparation"
  ),
];

export default function Orders() {
  const [value, setValue] = React.useState(0);
  const [showModal, setShowModal] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="orders-container">
      <div className="header-container">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          className="tabs"
        >
          <Tab label="Order Status" {...a11yProps(0)} />
          <Tab label="Order History" {...a11yProps(1)} />
          <span style={{ flex: "1", textAlign: "end", marginRight: "24px" }}>
            <SelectBox
              menuList={["today", "tommorrow", "yesterday"]}
              label="Today"
            />
          </span>
          <TextField
            id="outlined-secondary"
            type="text"
            variant="outlined"
            size="small"
            className="input orders-search-input"
            placeholder="Search"
            InputProps={{
              startAdornment: <img src={SearchIcon} className="search-icon" />,
            }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Card plain>
            <CardBody>
              <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                            onClick={() => setShowModal(true)}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </CardBody>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </div>
      <OrdersModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
Orders.propTypes = {};
