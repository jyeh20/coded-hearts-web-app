import React from "react";

import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";

const NavDrawer = (props) => {
  const { drawerOpen, toggleDrawer, children } = props;

  const useStyles = makeStyles((theme) => ({
    "@media (min-width: 768px)": {
      drawerMobile: {
        display: "none",
      },
    },
    "@media (max-width: 767px)": {
      drawerMobile: {
        height: "100vh",
      },
      drawerDesktop: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Drawer
        className={classes.drawerDesktop}
        anchor={"left"}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {children}
      </Drawer>
      <Drawer
        className={classes.drawerMobile}
        anchor={"bottom"}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {children}
      </Drawer>
    </>
  );
};

export default NavDrawer;
