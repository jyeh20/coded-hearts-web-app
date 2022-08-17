import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import MenuIcon from "@material-ui/icons/Menu";

const Menu = (props) => {
  const { lightMode, toggleLightMode, toggleDrawer } = props;

  const useStyles = makeStyles((theme) => ({
    menuLayout: {
      margin: "auto",
      gridColumnStart: 1,
      gridColumnEnd: 2,
      display: "grid",
      gridTemplateColumns: "10% 20% 20% 50%",
    },

    menuLightToggle: {
      margin: "auto",
      gridColumnStart: 3,
      gridColumnEnd: 4,
      cursor: "pointer",
    },

    menu: {
      margin: "auto",
      gridColumnStart: 2,
      gridColumnEnd: 3,
      cursor: "pointer",
    },

    "@media (max-width: 767px)": {
      menuLayout: {
        display: "flex",
      },
    },

    "@media (min-width: 768px)": {
      menuLayout: {
        width: "100%",
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.menuLayout}>
      <MenuIcon className={classes.menu} onClick={toggleDrawer(true)} />
      <BrightnessHighIcon
        className={classes.menuLightToggle}
        onClick={() => {
          toggleLightMode(!lightMode);
        }}
      />
    </div>
  );
};

export default Menu;
