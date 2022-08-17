import React from "react";

import Socials from "./Socials";
import EPK from "./EPK";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footerLayout: {
    display: "grid",
    gridTemplateColumns: "15vw 35vw 35vw 15vw",
    width: "100%",
    height: "20vh",
    position: "relative",
    bottom: 0,
  },

  "@media (max-width: 767px)": {
    footerLayout: {
      gridTemplateColumns: "5vw 45vw 45vw 5vw",
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  const { bgColor, iconColor } = props;

  return (
    <div className={classes.footerLayout} style={{ backgroundColor: bgColor }}>
      <Socials color={iconColor} />
      <EPK color={iconColor} />
    </div>
  );
};

export default Footer;
