import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import MenuIcon from '@material-ui/icons/Menu';


const Menu = (props) => {
  const { lightMode, toggleLightMode, toggleDrawer } = props

  const useStyles = makeStyles((theme) => ({
    layout: {
      margin: 'auto',
      width: '100%',
      gridColumnStart: 1,
      gridColumnEnd: 2,
      display: 'grid',
      gridTemplateColumns: '10% 20% 20% 50%',
    },

    lightToggle: {
      margin: 'auto',
      gridColumnStart: 3,
      gridColumnEnd: 4,
      cursor: 'pointer',
    },

    menu: {
      margin: 'auto',
      gridColumnStart: 2,
      gridColumnEnd: 3,
      cursor: 'pointer',
    },
  }))
  const classes = useStyles()

  const handleMenu = () => {
    {toggleDrawer(true)}
    console.log("menu clicked")
  }

  return (
    <div className={classes.layout}>
      <MenuIcon
        className={classes.menu}
        onClick={toggleDrawer(true)}
      />
      <BrightnessHighIcon
        className={classes.lightToggle}
        onClick={() => {toggleLightMode(!lightMode)}}
      />
    </div>
  )
}

export default Menu