import React from 'react'

import Socials from './Socials'

import colors from '../../scripts/colors'

import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'grid',
    gridTemplateColumns: '33% 33% 33%',
    width: '100vw',
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
  const { lightMode, toggleLightMode } = props

  const getBGColor = () => {
    return (lightMode ? colors.white : colors.black)
  }

  const getFontColor = () => {
    return (lightMode ? colors.black : colors.white)
  }

  return (
    <div
      className={classes.layout}
      style={{backgroundColor: `${getBGColor()}`}}
    >
      <BrightnessHighIcon
        className={classes.lightToggle}
        style={{color: `${getFontColor()}`}}
        onClick={() => {toggleLightMode(!lightMode)}}
      />

      <Typography
        className={classes.title}
        style={{color: `${getFontColor()}`}}
      >
        The Eutectics
      </Typography>
      <Socials
        className={classes.socials}
        color={`${getFontColor()}`}
      />
    </div>
  )
}

export default Header