import emailjs from "emailjs-com";
import dotenv from "dotenv";

const varKeys = {
  serviceID: process.env.REACT_APP_EMAIL_SERVICE_ID,
  templateID: process.env.REACT_APP_EMAIL_TEMPLATE_ID,
  userID: process.env.REACT_APP_EMAIL_USER_ID,
};

const sendEmail = async (e) => {
  dotenv.config({ path: "../../.env" });
  try {
    await emailjs.sendForm(
      varKeys.serviceID,
      varKeys.templateID,
      e.target,
      varKeys.userID
    );
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

const emailFunctions = {
  sendEmail,
};

export default emailFunctions;
