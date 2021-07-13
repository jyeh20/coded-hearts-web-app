import React from 'react'

import colors from '../../scripts/colors'
import navItems from '../../scripts/navItems'

import NavbarItem from './NavbarItem'

import { makeStyles } from '@material-ui/core/styles'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'

const Navbar = (props) => {
  const { lightMode, drawerOpen, toggleDrawer } = props

  const useStyles = makeStyles((theme) => ({
    layout: {
      width: '100%',
      maxWidth: '100%',
      overflowX: 'hidden',
    },

    sidebar: {
      width: '20vw',
      height: '100%',
      backgroundColor: lightMode ? colors.sidebarLight : colors.sidebarDark,
      color: lightMode ? colors.sidebarDark : colors.sidebarLight
    },

    sidebarTitle: {
      fontFamily: 'Cambay',
      fontSize: '4vh',
      textAlign: 'center',
      margin: 'auto',
      marginTop: '3vh',
      marginBottom: '3vh',
    }
  }))
  const classes = useStyles()

  return (
    <Drawer anchor={"left"} open={drawerOpen} onClose={toggleDrawer(false)}>
      <List className={classes.sidebar}>
        <Typography className={classes.sidebarTitle}>
          The Eutectics
        </Typography>
        <Divider light={!lightMode} />
        {navItems.map((item) =>
          <NavbarItem lightMode={lightMode} link={item.link} title={item.title} />
        )}
      </List>
    </Drawer>
  )
}

export default Navbar