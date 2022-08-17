import React, { useState, useEffect } from "react";

import staticContent from "../scripts/static";

import cover from "../assets/cover-photo.jpg";
import PerformanceTable from "../components/Home/PerformanceTable";
import YouTubeContainer from "../components/Home/YouTubeContainter";
import ContactButton from "../components/Home/ContactButton";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const Home = (props) => {
  const { lightMode, tableColor, bgColor, iconColor, videoLink, performances } =
    props;
  const [imageHeight, setImageHeight] = useState("133px");

  const getElementOffsetHeight = (id) => {
    const elementHeight = document.getElementById(id)?.offsetHeight;
    return elementHeight ? elementHeight : "50vh";
  };

  useEffect(() => {
    setImageHeight(getElementOffsetHeight("Header-mobile"));
  }, []);

  const useStyles = makeStyles((theme) => ({
    layout: {
      paddingBottom: "10vh",
      backgroundColor: bgColor,
      color: iconColor,
    },

    background: {
      backgroundColor: bgColor,
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -2,
    },

    image: {
      zIndex: -1,
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
    },

    body: {
      width: "100vw",
      marginTop: "80vh",
    },

    homeTitle: {
      fontFamily: "Cambay",
      fontSize: "10vh",
      paddingTop: "14vh",
      paddingBottom: "2vh",
      textAlign: "center",
    },

    bodyText: {
      fontFamily: "Cambay",
      fontSize: "3vh",
      textAlign: "center",
      margin: "auto",
      width: "70%",
      marginBottom: "15vh",
    },

    button: {
      margin: "auto",
    },

    "@media (max-width: 767px)": {
      body: {
        marginTop: getElementOffsetHeight("Coded-Hearts-cover"),
      },
      homeTitle: {
        fontFamily: "Cambay",
        fontSize: "6vh",
        paddingTop: "5vh",
        paddingBottom: "2vh",
        textAlign: "center",
      },
      image: {
        position: "fixed",
        top: imageHeight,
        left: 0,
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <div className={classes.background}>
        <img
          id="Coded-Hearts-cover"
          className={classes.image}
          src={cover}
          alt="Coded Hearts cover"
        />
      </div>
      <div className={classes.body}>
        <Typography className={classes.homeTitle}>About</Typography>
        <Typography className={classes.bodyText}>
          {staticContent.about}
        </Typography>
        <Typography className={classes.homeTitle}>
          Upcoming Performances
        </Typography>
        <PerformanceTable
          lightMode={lightMode}
          tableColor={tableColor}
          iconColor={iconColor}
          performances={performances}
        />
        <Typography className={classes.homeTitle}>
          Check out our YouTube!
        </Typography>
        <YouTubeContainer lightMode={lightMode} videoLink={videoLink} />
        <ContactButton className={classes.button} iconColor={iconColor} />
      </div>
    </div>
  );
};

export default Home;
