import emailjs from 'emailjs-com'

const varKeys = {
  serviceID: process.env.REACT_APP_EMAIL_SERVICE_ID,
  templateID: process.env.REACT_APP_EMAIL_TEMPLATE_ID,
  userID: process.env.REACT_APP_EMAIL_USER_ID
}

const sendEmail = (e) => {
  emailjs.sendForm(varKeys.serviceID, varKeys.templateID, e.target, varKeys.userID)
  .then(() => {
      return true
  }, (error) => {
      return false
  });
}

const emailFunctions = {
  sendEmail
}

export default emailFunctions