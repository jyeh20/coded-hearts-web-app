import React, { useState, useRef } from "react";

import colors from "../scripts/colors";
import firebaseFunctions from "../firebase/firebaseUtil";
import links from "../scripts/links";

import { makeStyles } from "@material-ui/core/styles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/Navbar";
import Home from "./Home";
import Contact from "./Contact";
import EPK from "./EPK";

const PageLayout = () => {
  // lightMode vs darkMode
  const { getPerformances } = firebaseFunctions;
  const [lightMode, setLightMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const performances = useRef(getPerformances());

  const useStyles = makeStyles((theme) => ({
    pageLayout: {
      width: "100%",
      maxWidth: "100%",
      overflowX: "hidden",
    },

    sidebar: {
      width: "20vw",
      height: "100%",
      backgroundColor: lightMode ? colors.sidebarLight : colors.sidebarDark,
      color: lightMode ? colors.sidebarDark : colors.sidebarLight,
    },

    sidebarTitle: {
      fontFamily: "Cambay",
      fontSize: "4vh",
      textAlign: "center",
      margin: "auto",
      marginTop: "2vh",
      marginBottom: "3vh",
    },
  }));
  const classes = useStyles();

  const toggleDrawer = (openState) => (event) => {
    console.log("I am toggled");
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    console.log(openState);
    setDrawerOpen(openState);
  };

  const BGColor = lightMode ? colors.white : colors.black;
  const tableColor = lightMode ? colors.lightGrey : colors.darkGrey;
  const iconColor = lightMode ? colors.black : colors.white;

  return (
    <Router>
      <div className={classes.pageLayout}>
        <NavBar
          lightMode={lightMode}
          drawerOpen={drawerOpen}
          toggleDrawer={toggleDrawer}
          setDrawerOpen={setDrawerOpen}
        />
        <Header
          bgColor={BGColor}
          iconColor={iconColor}
          lightMode={lightMode}
          toggleLightMode={setLightMode}
          toggleDrawer={toggleDrawer}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                lightMode={lightMode}
                tableColor={tableColor}
                bgColor={BGColor}
                iconColor={iconColor}
                videoLink={links.featuredVideo}
                performances={performances.current}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            render={() => (
              <Contact
                lightMode={lightMode}
                bgColor={BGColor}
                iconColor={iconColor}
              />
            )}
          />
          <Route
            exact
            path="/epk"
            render={() => (
              <EPK
                lightMode={lightMode}
                bgColor={BGColor}
                iconColor={iconColor}
              />
            )}
          />
        </Switch>
        <Footer bgColor={BGColor} iconColor={iconColor} />
      </div>
    </Router>
  );
};

export default PageLayout;
