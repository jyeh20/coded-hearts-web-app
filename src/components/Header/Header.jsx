import React from 'react'

import Socials from './Socials'

import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'grid',
    gridTemplateColumns: '33% 33% 33%',
    width: '100%',
    height: '10vh',
  },

  lightToggle: {
    margin: 'auto',
    gridColumnStart: 1,
    gridColumnEnd: 2,
    cursor: 'pointer',
  },

  title: {
    margin: 'auto',
    fontFamily: 'Cambay',
    gridColumnStart: 2,
    gridColumnEnd: 3,
    cursor: 'pointer',
    fontSize: '4vh'
  },

  socials: {
    margin: 'auto',
    gridColumnStart: 3,
    gridColumnEnd: 4,
  }
}))

const Header = (props) => {
  const classes = useStyles();
  const { bgColor, iconColor, lightMode, toggleLightMode } = props

  return (
    <div
      className={classes.layout}
      style={{backgroundColor: bgColor,
              color: iconColor}}
    >
      <BrightnessHighIcon
        className={classes.lightToggle}
        onClick={() => {toggleLightMode(!lightMode)}}
      />

      <Typography
        className={classes.title}
      >
        The Eutectics
      </Typography>
      <Socials
        className={classes.socials}
        color={iconColor}
      />
    </div>
  )
}

export default Header