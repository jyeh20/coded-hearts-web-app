import React from "react";

import colors from "../../scripts/colors";

import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const NavbarItem = (props) => {
  const { lightMode, link, title, toggleDrawer } = props;

  const useStyles = makeStyles((theme) => ({
    item: {
      margin: "auto",
      textAlign: "center",
      color: lightMode ? colors.sidebarDark : colors.sidebarLight,
    },

    text: {
      margin: "auto",
      fontFamily: "Cambay",
      fontSize: "3vh",
    },
  }));
  const classes = useStyles();
  const history = useHistory();

  const handleRoute = () => {
    history.push(`${link}`);
  };

  return (
    <ListItem className={classes.item} button key={title}>
      <ListItemText
        onClick={handleRoute}
        className={classes.text}
        disableTypography={true}
        primary={title}
      />
    </ListItem>
  );
};

export default NavbarItem;
