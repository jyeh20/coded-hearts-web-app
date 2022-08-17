import React from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const SocialButton = (props) => {
  const { color, link, icon, title } = props;

  const FancyButton = withStyles({
    root: {
      display: "grid",
      width: "100%",
      gridTemplateColumns: "25% 75%",
      margin: "auto",
    },
  })(Button);

  const useStyles = makeStyles((theme) => ({
    socialButtonLayout: {
      color: color,
    },
  }));

  const classes = useStyles();

  return (
    <FancyButton className={classes.socialButtonLayout} href={link}>
      {icon}
      {title}
    </FancyButton>
  );
};

export default SocialButton;
