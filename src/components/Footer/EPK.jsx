import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  layout: {
    gridColumnStart: 3,
    gridColumnEnd: 4,
    display: 'grid',
    gridTemplateRows: '50% 50%',
    margin: 'auto',
    height: '80%',
    width: '60%',
  },

  emailDiv: {
    margin: 'auto',
    gridRowStart: 1,
    gridRowEnd: 2,
    display: 'flex',
    flexDirection: 'column',
  },

  epk: {
    margin: 'auto',
    gridRowStart: 2,
    gridRowEnd: 3,
    fontFamily: 'Cambay',
    fontSize: '2vh',
    textDecoration: 'underline'
  },

  text: {
    margin: 'auto',
    fontFamily: 'Cambay',
    fontSize: '2vh',
  }
}))

const EPK = (props) => {
  const classes = useStyles()
  const { color } = props

  return (
    <div className={classes.layout}>
      <div className={classes.emailDiv}>
        <Typography
          className={classes.text}
          style={{color: color}}
        >
          Email
        </Typography>
        <Typography
          className={classes.text}
          style={{color: color}}
        >
          EutecticBand@gmail.com
        </Typography>
      </div>
      <Typography
        className={classes.epk}
        style={{color: color}}
      >
        Our EPK
      </Typography>
    </div>
  )
}

export default EPK