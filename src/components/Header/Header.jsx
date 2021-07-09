import React from 'react'

import Socials from './Socials'
import Menu from './Menu'

import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const Header = (props) => {
  const { bgColor, iconColor, lightMode, toggleLightMode, toggleDrawer } = props

  const useStyles = makeStyles((theme) => ({
    layout: {
      display: 'grid',
      gridTemplateColumns: '33% 33% 33%',
      width: '100%',
      height: '10vh',
      backgroundColor: bgColor,
      color: iconColor,
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

  const classes = useStyles();

  return (
    <div
      className={classes.layout}
    >
      <Menu
        lightMode={lightMode}
        toggleLightMode={toggleLightMode}
        toggleDrawer={toggleDrawer}
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