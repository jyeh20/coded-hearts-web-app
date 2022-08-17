import React from "react";

import Socials from "./Socials";
import Menu from "./Menu";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const Header = (props) => {
  const { bgColor, iconColor, lightMode, toggleLightMode, toggleDrawer } =
    props;

  const useStyles = makeStyles((theme) => ({
    headerLayoutDesktop: {
      display: "grid",
      gridTemplateColumns: "33% 33% 33%",
      width: "100vw",
      height: "10vh",
      backgroundColor: bgColor,
      color: iconColor,
    },

    headerTitle: {
      margin: "auto",
      fontFamily: "Cambay",
      gridColumnStart: 2,
      gridColumnEnd: 3,
      cursor: "pointer",
      fontSize: "4vh",
    },

    headerSocials: {
      height: "100%",
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gridColumnStart: 3,
      gridColumnEnd: 4,
    },

    "@media (max-width: 767px)": {
      headerLayoutDesktop: {
        display: "none",
      },
      headerLayoutMobile: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "20vh",
        backgroundColor: bgColor,
        color: iconColor,
      },
      headerWrapper: {
        marginTop: "2vh",
        width: "100vw",
        display: "grid",
        gridTemplateColumns: "70% 30%",
      },
      headerTitleWrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      headerTitle: {
        fontSize: "max(18px, 4vh)",
        gridColumnStart: 1,
        gridColumnEnd: 2,
      },
      headerMenu: {
        marginTop: "auto",
        marginBottom: "auto",
        gridColumnStart: 2,
        gridColumnEnd: 3,
      },
    },

    "@media (min-width: 768px)": {
      headerLayoutMobile: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div id="Header-desktop" className={classes.headerLayoutDesktop}>
        <Menu
          lightMode={lightMode}
          toggleLightMode={toggleLightMode}
          toggleDrawer={toggleDrawer}
        />

        <Typography className={classes.headerTitle}>
          The Coded Hearts
        </Typography>
        <Socials className={classes.headerSocials} color={iconColor} />
      </div>
      <div id="Header-mobile" className={classes.headerLayoutMobile}>
        <div className={classes.headerWrapper}>
          <div className={classes.headerTitleWrapper}>
            <Typography className={classes.headerTitle}>
              The Coded Hearts
            </Typography>
          </div>
          <div className={classes.headerMenu}>
            <Menu
              lightMode={lightMode}
              toggleLightMode={toggleLightMode}
              toggleDrawer={toggleDrawer}
            />
          </div>
        </div>
        <Socials className={classes.headerSocials} color={iconColor} />
      </div>
    </>
  );
};

export default Header;
