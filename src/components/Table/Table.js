import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);
export default function CustomTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor, sortable, pagination } = props;
  const [sortConfig, setSortConfig] = React.useState({ columnIndex: null, direction: "asc" });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const sortedData = React.useMemo(() => {
    if (sortConfig.columnIndex == null) return tableData;
    const dataCopy = [...tableData];
    dataCopy.sort((a, b) => {
      const aVal = a[sortConfig.columnIndex];
      const bVal = b[sortConfig.columnIndex];
      const aNum = parseFloat(String(aVal).replace(/[^0-9.-]+/g, ""));
      const bNum = parseFloat(String(bVal).replace(/[^0-9.-]+/g, ""));
      const bothNumeric = !isNaN(aNum) && !isNaN(bNum);
      let cmp = 0;
      if (bothNumeric) {
        cmp = aNum - bNum;
      } else {
        cmp = String(aVal).localeCompare(String(bVal));
      }
      return sortConfig.direction === "asc" ? cmp : -cmp;
    });
    return dataCopy;
  }, [tableData, sortConfig]);

  const onSort = (index) => {
    if (!sortable) return;
    setSortConfig((prev) => {
      if (prev.columnIndex === index) {
        return { columnIndex: index, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { columnIndex: index, direction: "asc" };
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const pagedData = React.useMemo(() => {
    if (!pagination) return sortedData;
    const start = page * rowsPerPage;
    return sortedData.slice(start, start + rowsPerPage);
  }, [sortedData, pagination, page, rowsPerPage]);

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((label, idx) => {
                const isActive = sortable && sortConfig.columnIndex === idx;
                const indicator = isActive ? (sortConfig.direction === "asc" ? " ▲" : " ▼") : "";
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={idx}
                    onClick={() => onSort(idx)}
                    style={{ cursor: sortable ? "pointer" : "default" }}
                  >
                    {label}
                    {indicator}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {pagedData.map((row, rIdx) => {
            return (
              <TableRow key={rIdx} className={classes.tableBodyRow}>
                {row.map((cell, cIdx) => {
                  return (
                    <TableCell className={classes.tableCell} key={cIdx}>
                      {cell}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
        {pagination ? (
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                count={sortedData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                classes={{
                  root: classes.paginationRoot,
                  toolbar: classes.paginationToolbar,
                  caption: classes.paginationCaption,
                  selectIcon: classes.paginationSelectIcon,
                  actions: classes.paginationActions,
                }}
              />
            </TableRow>
          </TableFooter>
        ) : null}
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  sortable: PropTypes.bool,
  pagination: PropTypes.bool,
};
