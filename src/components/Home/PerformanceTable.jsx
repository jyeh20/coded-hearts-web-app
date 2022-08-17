import React, { useState, useEffect } from "react";

import PerformanceTableRow from "../../components/Home/PerformanceTableRow";
import colors from "../../scripts/colors";

import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const PerformanceTable = (props) => {
  const { lightMode, tableColor, iconColor, performances } = props;
  const [data, setData] = useState([]);

  const useStyles = makeStyles((theme) => ({
    tableLayout: {
      margin: "auto",
      borderRadius: "10px",
      width: "70%",
      marginBottom: "15vh",
    },

    header: {
      backgroundColor: colors.blue,
    },

    headerCell: {
      fontSize: "2.5vh",
      fontWeight: 300,
      fontFamily: "Cambay",
      color: lightMode ? colors.black : colors.white,
    },

    "@media (max-width: 767px)": {
      tableLayout: {
        width: "90%",
      },
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    performances.then((querySnapshot) => {
      setData(querySnapshot.docs);
    });
  }, [performances]);

  return (
    <TableContainer component={Paper} className={classes.tableLayout}>
      <Table sx={{ tableLayout: "auto" }}>
        <TableHead className={classes.header} style={{ color: iconColor }}>
          <TableRow>
            <TableCell className={classes.headerCell}>Location</TableCell>
            <TableCell className={classes.headerCell} align="right">
              Date
            </TableCell>
            <TableCell className={classes.headerCell} align="right">
              Time (PST)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ backgroundColor: tableColor, color: "#FFFFFF" }}>
          {data.map((row, index) => (
            <PerformanceTableRow
              key={index}
              row={row.data()}
              lightMode={lightMode}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PerformanceTable;
