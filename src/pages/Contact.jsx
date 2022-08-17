import React, { useState } from "react";

import colors from "../scripts/colors";
import emailFunctions from "../scripts/emailutils";
import firebaseFunctions from "../firebase/firebaseUtil";
import validator from "email-validator";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const Contact = (props) => {
  const { lightMode, bgColor } = props;
  const { writeNewEmail } = firebaseFunctions;
  const { sendEmail } = emailFunctions;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [sendDisabled, setSendDisabled] = useState(false);
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    layout: {
      height: "90vh",
      backgroundColor: bgColor,
      paddingTop: "15vh",
    },

    name: {
      backgroundColor: colors.white,
      borderRadius: 10,
    },

    email: {
      backgroundColor: colors.white,
      borderRadius: 10,
    },

    message: {
      backgroundColor: colors.white,
      borderRadius: 10,
    },

    thankyou: {
      margin: "auto",
      color: lightMode ? colors.black : colors.white,
      display: "grid",
      gridTemplateRows: "70% 30%",
      height: "40vh",
      width: "60%",
    },

    thankMessage: {
      margin: "auto",
      gridRowStart: 1,
      gridRowEnd: 2,
      fontFamily: "Cambay",
      textAlign: "center",
      fontSize: "5vh",
    },

    homeButton: {
      margin: "auto",
      gridRowStart: 2,
      gridRowEnd: 3,
      width: "40%",
    },

    "@media (min-width: 768px)": {
      container: {
        display: "grid",
        gridTemplateRows: "25% 55% 10%",
        gridTemplateColumns: "50% 50%",
        margin: "auto",
        height: "60%",
        width: "60%",
      },
      name: {
        marginRight: "auto",
        marginBottom: "auto",
        width: "80%",
        gridColumnStart: 1,
        gridColumnEnd: 2,
        gridRowStart: 1,
        gridRowEnd: 2,
        borderRadius: 10,
      },

      email: {
        marginLeft: "auto",
        marginBottom: "auto",
        width: "80%",
        gridColumnStart: 2,
        gridColumnEnd: 3,
        gridRowStart: 1,
        gridRowEnd: 2,
        borderRadius: 10,
      },

      message: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "auto",
        width: "99%",
        gridColumnStart: 1,
        gridColumnEnd: 3,
        gridRowStart: 2,
        gridRowEnd: 3,
        borderRadius: 10,
      },

      send: {
        marginTop: "auto",
        marginLeft: "auto",
        gridColumnStart: 2,
        gridColumnEnd: 3,
        gridRowStart: 3,
        gridRowEnd: 4,
      },
    },

    "@media (max-width: 767px)": {
      layout: {
        paddingTop: "5vh",
        height: "70vh",
      },

      container: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "auto",
      },

      name: {
        backgroundColor: colors.white,
        marginBottom: "2vh",
      },

      email: {
        backgroundColor: colors.white,
        marginBottom: "2vh",
      },

      message: {
        backgroundColor: colors.white,
        marginBottom: "4vh",
      },

      thankyou: {
        width: "85%",
      },

      thankMessage: {
        fontSize: "4vh",
      },

      homeButton: {
        width: "60%",
      },
    },
  }));
  const classes = useStyles();

  const CustomButton = withStyles({
    root: {
      backgroundColor: sendDisabled ? colors.lightGrey : colors.blue,
      borderRadius: 10,
      color: sendDisabled ? colors.black : colors.white,
      "&:hover": {
        backgroundColor: colors.hoverBlue,
      },
    },
  })(Button);

  // handlers

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(name === "" ? true : false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(!validator.validate(email) ? true : false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError(message === "" ? true : false);
  };

  const backToHome = () => {
    history.push("/");
  };

  // error checking

  const setErrors = () => {
    let errorState = false;
    // name
    if (name === "") {
      setNameError(true);
      errorState = true;
    } else {
      setNameError(false);
    }

    // email
    if (!validator.validate(email)) {
      setEmailError(true);
      errorState = true;
    } else {
      setEmailError(false);
    }

    // message
    if (message === "") {
      setMessageError(true);
      errorState = true;
    } else {
      setMessageError(false);
    }

    return errorState;
  };

  // send message

  const submitMessage = (e) => {
    e.preventDefault();
    setSendDisabled(true);

    if (setErrors()) {
      return;
    }

    writeNewEmail(name, email, message);
    sendMessage(e);
  };

  const sendMessage = async (e) => {
    if (await sendEmail(e)) {
      setMessageSent(true);
    }
  };

  if (messageSent) {
    return (
      <div className={classes.layout}>
        <div className={classes.thankyou}>
          <Typography className={classes.thankMessage}>
            Thanks for sending us a message, we'll get back to you soon!
          </Typography>
          <CustomButton className={classes.homeButton} onClick={backToHome}>
            Back to Home
          </CustomButton>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.layout}>
      <form
        className={classes.container}
        onSubmit={submitMessage}
        autoComplete="off"
      >
        <TextField
          error={nameError}
          helperText={nameError ? "Name must not be empty" : null}
          variant="filled"
          label="Your Name"
          id="from_name"
          name="from_name"
          className={classes.name}
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          error={emailError}
          helperText={emailError ? "Must be a valid email" : null}
          type="email"
          label="Your Email"
          id="from_email"
          name="from_email"
          variant="filled"
          className={classes.email}
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          error={messageError}
          helperText={messageError ? "Message must not be empty" : null}
          label="Message"
          id="message"
          name="message"
          variant="filled"
          multiline
          rows={7}
          className={classes.message}
          value={message}
          onChange={handleMessageChange}
        />
        <CustomButton
          className={classes.send}
          disabled={sendDisabled}
          type="submit"
          value="Submit"
        >
          Send Message
        </CustomButton>
      </form>
    </div>
  );
};

export default Contact;
