import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import colors from "../../scripts/colors";
import links from "../../scripts/links";

import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MailIcon from "@material-ui/icons/Mail";

const EmailHeader = (props) => {
  const { color } = props;
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    emailButtonLayout: {
      margin: "auto",
      height: "60%",
      minWidth: "160px",
      width: "80%",
      backgroundColor: colors.blue,
      borderRadius: 10,
      color: color,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: colors.hoverBlue,
      },
    },

    mailIcon: {
      margin: "auto",
      gridColumnStart: 1,
      gridColumnEnd: 2,
      width: "80%",
    },

    contactTypography: {
      textAlign: "center",
      margin: "auto",
      gridColumnStart: 2,
      gridColumnEnd: 3,
      width: "80%",
      fontSize: "2vh",
      fontFamily: "Cambay",
    },

    "@media (max-width: 767px)": {
      emailButtonLayout: {
        display: "none",
      },
    },
  }));
  const classes = useStyles();

  const handleContactButton = () => {
    history.push("/contact");
  };

  return (
    <Button
      className={classes.emailButtonLayout}
      onClick={handleContactButton}
      startIcon={<MailIcon />}
    >
      Contact Us
    </Button>
  );
};

const Socials = (props) => {
  const { color } = props;
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    headerSocialLayout: {
      display: "grid",
      gridTemplateColumns: "auto auto auto auto",
      height: "100%",
      width: "100%",
      color: color,
    },

    headerInstagramIconButton: {
      color: color,
      margin: "auto",
      gridColumnStart: 1,
      gridColumnEnd: 2,
      width: "80%",
    },

    headerInstagram: {
      color: color,
      margin: "auto",
      cursor: "pointer",
    },

    headerFacebookIconButton: {
      color: color,
      margin: "auto",
      gridColumnStart: 2,
      gridColumnEnd: 3,
      width: "80%",
    },

    headerFacebook: {
      color: color,
      margin: "auto",
      cursor: "pointer",
    },

    headerYoutubeIconButton: {
      color: color,
      margin: "auto",
      gridColumnStart: 3,
      gridColumnEnd: 4,
      width: "80%",
    },

    headerYoutube: {
      color: color,
      margin: "auto",
      cursor: "pointer",
    },

    headerEmailDesktop: {
      margin: "auto",
      gridColumnStart: 4,
      gridColumnEnd: 5,
      width: "80%",
    },

    "@media (max-width: 767px)": {
      headerEmailDesktop: {
        display: "none",
      },
      headerEmailButton: {
        color: color,
        margin: "auto",
        gridColumnStart: 4,
        gridColumnEnd: 5,
        width: "80%",
      },

      headerEmailMobile: {
        color: color,
        margin: "auto",
        cursor: "pointer",
      },
    },

    "@media (min-width: 768px)": {
      headerEmailMobile: {
        display: "none",
      },
    },
  }));
  const classes = useStyles();

  const handleContactButton = () => {
    history.push("/contact");
  };

  return (
    <div className={classes.headerSocialLayout}>
      <IconButton
        href={links.instagram}
        target="_blank"
        className={classes.headerInstagramIconButton}
      >
        <InstagramIcon className={classes.headerInstagram} />
      </IconButton>
      <IconButton
        href={links.facebook}
        target="_blank"
        className={classes.headerFacebookIconButton}
      >
        <FacebookIcon className={classes.headerFacebook} />
      </IconButton>
      <IconButton
        href={links.youtube}
        target="_blank"
        className={classes.headerYoutubeIconButton}
      >
        <YouTubeIcon className={classes.headerYoutube} />
      </IconButton>
      <EmailHeader className={classes.headerEmailDesktop} color={color} />
      <div className={classes.headerEmailMobile}>
        <IconButton
          onClick={handleContactButton}
          className={classes.headerEmailButton}
        >
          <MailIcon className={classes.headerEmailMobile} />
        </IconButton>
      </div>
    </div>
  );
};

export default Socials;
