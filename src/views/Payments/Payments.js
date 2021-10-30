import React from "react";
import "./Payments.css";
import TextField from "@material-ui/core/TextField";
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
import ColorBox from "../ColorBox/ColorBox";
import StripeImage from "assets/img/stripe_logo.png";
import AppleImage from "assets/img/apple_logo.png";
import BlueNavyImage from "assets/img/blue_navy.png";
import SearchIcon from "assets/icons/search-icon.png";
import GooglePlayImage from "assets/img/google_play.png";
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
];

const payments = [
  {
    image: StripeImage,
  },
  {
    image: AppleImage,
  },
  {
    image: BlueNavyImage,
  },
  {
    image: GooglePlayImage,
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

export default function Payments() {
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
    <div className="payments-container">
      <div className="header-container">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          className="tabs"
        >
          <Tab label="Payments Via Cash" {...a11yProps(0)} />
          <Tab label="Payments Via Credit Card" {...a11yProps(1)} />
          <Tab label="Payments Settings" {...a11yProps(1)} />
          <SelectBox
            menuList={["today", "tommorrow", "yesterday"]}
            label="Today"
          />
          <TextField
            id="outlined-secondary"
            type="text"
            variant="outlined"
            size="small"
            className="input"
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
        <TabPanel value={value} index={1}></TabPanel>
        <TabPanel value={value} index={2}>
          <div className="section3">
            <div className="color-box-section">
              <ColorBox
                boxes={boxes}
                showArrow={true}
                customStyles={{ marginLeft: "30px" }}
              />
            </div>
            <div className="payments-cards-section">
              <h3>Integrate Your Payment Online</h3>
              <div className="payments-section">
                {payments.map((payment, index) => (
                  <div className="payment-card" key={index}>
                    <img src={payment.image} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
      </div>
      <OrdersModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
Payments.propTypes = {};
