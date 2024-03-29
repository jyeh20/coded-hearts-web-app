import React from "react";

import colors from "../../scripts/colors";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import MailIcon from "@material-ui/icons/Mail";

const ContactButton = (props) => {
  const { iconColor } = props;
  const useStyles = makeStyles((theme) => ({
    container: {
      margin: "auto",
      width: "30vw",
      marginBottom: "4vh",
    },

    button: {
      margin: "auto",
      backgroundColor: colors.blue,
      color: iconColor,
      width: "30vw",
      height: "8vh",
      borderRadius: "10px",
      "&:hover": {
        backgroundColor: colors.hoverBlue,
      },
    },

    "@media (max-width: 767px)": {
      container: {
        width: "60vw",
        marginBottom: "2vh",
      },
      button: {
        width: "60vw",
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        startIcon={<MailIcon />}
        href="/contact"
      >
        Contact Us
      </Button>
    </div>
  );
};

export default ContactButton;
