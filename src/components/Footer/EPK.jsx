import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const EPK = (props) => {
  const { color } = props

  const useStyles = makeStyles((theme) => ({
    layout: {
      color: color,
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
      color: color,
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
  const classes = useStyles()

  return (
    <div className={classes.layout}>
      <div className={classes.emailDiv}>
        <Typography
          className={classes.text}
        >
          Email
        </Typography>
        <Typography
          className={classes.text}
        >
          EutecticBand@gmail.com
        </Typography>
      </div>
      <Button
        href="/epk"
        className={classes.epk}
      >
        Our EPK
      </Button>
    </div>
  )
}

export default EPK