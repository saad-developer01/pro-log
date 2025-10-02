import React from "react";
import TextField from "@material-ui/core/TextField";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [searchOne, setSearchOne] = React.useState("");
  const [searchTwo, setSearchTwo] = React.useState("");

  const dataOne = [
    ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
    ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
    ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
    ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
    ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
    ["Mason Porter", "Chile", "Gloucester", "$78,615"],
  ];

  const dataTwo = [
    ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
    ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
    ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
    ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
    ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
    ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"],
  ];

  const filterRows = (rows, query) => {
    if (!query) return rows;
    const q = query.toLowerCase();
    return rows.filter((row) => row.some((cell) => String(cell).toLowerCase().includes(q)));
  };

  const filteredOne = React.useMemo(() => filterRows(dataOne, searchOne), [dataOne, searchOne]);
  const filteredTwo = React.useMemo(() => filterRows(dataTwo, searchTwo), [dataTwo, searchTwo]);
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                value={searchOne}
                onChange={(e) => setSearchOne(e.target.value)}
              />
            </div>
            <Table
              tableHeaderColor="lightGray"
              sortable
              pagination
              tableHead={["Name", "Country", "City", "Salary"]}
              tableData={filteredOne}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                value={searchTwo}
                onChange={(e) => setSearchTwo(e.target.value)}
              />
            </div>
            <Table
              tableHeaderColor="lightGray"
              sortable
              pagination
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={filteredTwo}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
