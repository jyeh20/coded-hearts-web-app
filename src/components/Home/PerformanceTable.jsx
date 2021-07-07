import React from 'react'

import PerformanceTableRow from '../../components/Home/PerformanceTableRow'
import colors from '../../scripts/colors';

import { makeStyles } from '@material-ui/core/styles'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const PerformanceTable = (props) => {
  const { lightMode, tableColor, iconColor } = props

  const useStyles = makeStyles((theme) => ({
    tableLayout: {
      margin: 'auto',
      borderRadius: '10px',
      width: '70%',
    },

    header: {
      backgroundColor: colors.blue,
    },

    headerCell: {
      fontSize: '2.5vh',
      fontWeight: 300,
      fontFamily: 'Cambay',
      color: lightMode ? colors.black : colors.white,
    },
  }))
  const classes = useStyles()

  const data = [
    {
      location: "Los Angeles",
      date: '5/1',
      time: '5:00pm - 6:00pm'
    },
    {
      location: "SteelCraft",
      date: '5/1',
      time: '5:00pm - 6:00pm'
    },
    {
      location: "Dodger Stadium",
      date: '5/1',
      time: '5:00pm - 6:00pm'
    },
  ]

  return (
    <TableContainer component={Paper} className={classes.tableLayout}>
      <Table>
        <TableHead className={classes.header} style={{color: iconColor}}>
          <TableRow>
            <TableCell className={classes.headerCell}>Location</TableCell>
            <TableCell className={classes.headerCell} align="right">Date</TableCell>
            <TableCell className={classes.headerCell} align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{backgroundColor: tableColor, color: "#FFFFFF"}}>
          {data.map((row) => (
            <PerformanceTableRow row={row} lightMode={lightMode} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PerformanceTable