import React from "react";

import colors from "../../scripts/colors";
import navItems from "../../scripts/navItems";

import NavbarItem from "./NavbarItem";

import { makeStyles } from "@material-ui/core/styles";

import NavDrawer from "./NavDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = (props) => {
  const { lightMode, drawerOpen, setDrawerOpen, toggleDrawer } = props;

  const useStyles = makeStyles((theme) => ({
    layout: {
      width: "100%",
      maxWidth: "100%",
      overflowX: "hidden",
    },

    sidebar: {
      width: "20vw",
      height: "100%",
      backgroundColor: lightMode ? colors.sidebarLight : colors.sidebarDark,
      color: lightMode ? colors.sidebarDark : colors.sidebarLight,
      paddingTop: "15vh",
    },

    sidebarTitle: {
      fontFamily: "Cambay",
      fontSize: "4vh",
      textAlign: "center",
      margin: "auto",
      marginTop: "3vh",
      marginBottom: "3vh",
    },

    "@media (max-width: 767px)": {
      sidebar: {
        width: "100vw",
        height: "100vh",
      },
      navCloseButtonWrapper: {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "6vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },

    "@media (min-width: 768px)": {
      navCloseButton: {
        display: "none",
      },
      navCloseButtonWrapper: {
        display: "none",
      },
    },
  }));
  const classes = useStyles();

  return (
    <NavDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer}>
      <List className={classes.sidebar}>
        <Divider light={!lightMode} />
        {navItems.map((item, index) => (
          <NavbarItem
            key={index}
            toggleDrawer={toggleDrawer}
            lightMode={lightMode}
            link={item.link}
            title={item.title}
          />
        ))}
        <div className={classes.navCloseButtonWrapper}>
          <IconButton
            className={classes.navCloseButton}
            onClick={() => {
              setDrawerOpen(false);
            }}
          >
            <CloseIcon sx={{ color: colors.white }} />
          </IconButton>
        </div>
      </List>
    </NavDrawer>
  );
};

export default Navbar;
