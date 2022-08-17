import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const YouTubeContainer = (props) => {
  const { videoLink } = props;
  const getHeightAndWidth = () => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    if (width > height) {
      return {
        height: 70,
        width: (70 * width) / height,
      };
    }
    return {
      height: 30,
      width: (30 * 1920) / 1080,
    };
  };
  const heightAndWidth = getHeightAndWidth();
  const height = heightAndWidth.height;
  const width = heightAndWidth.width;
  const useStyles = makeStyles((theme) => ({
    container: {
      margin: "auto",
      height: `${height}vh`,
      width: `${width}vh`,
      marginTop: "10vh",
      marginBottom: "20vh",
    },

    "@media (max-width: 767px)": {
      container: {
        marginTop: "5vh",
        marginBottom: "10vh",
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <iframe
        width="100%"
        height="100%"
        src={videoLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeContainer;
