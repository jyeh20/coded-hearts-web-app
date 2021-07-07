import React, { useState } from 'react'

import colors from '../../scripts/colors'

import { makeStyles } from '@material-ui/core/styles'

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const PerformanceTableRow = (props) => {
  const { lightMode, row } = props
  const [hover, setHover] = useState(false)

  const cellColor = () => {
    if (hover) {
      return lightMode ? colors.white : colors.black
    }
    return lightMode ? colors.black : colors.white
  }
  const useStyles = makeStyles((theme) => ({
    row: {
      '&:hover': {
        backgroundColor: lightMode ? colors.darkGrey : colors.lightGrey,
      }
    },

    cell: {
      color: cellColor,
      fontSize: '2vh',
      fontFamily: 'Cambay',
    }
  }))

  const classes = useStyles()

  return (
    <TableRow
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={row.location}
      className={classes.row}
      style={{color: "#FFFFFF"}}>
      <TableCell
        component="th"
        scope="row"
        className={classes.cell}
      >
        {row.location}
      </TableCell>
      <TableCell
        className={classes.cell}
        align="right"
      >
        {row.date}
      </TableCell>
      <TableCell
        className={classes.cell}
        align="right"
      >
        {row.time}
      </TableCell>
    </TableRow>
  )
}

export default PerformanceTableRow