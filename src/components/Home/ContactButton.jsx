import React from 'react'

import colors from '../../scripts/colors'

import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

import MailIcon from '@material-ui/icons/Mail'

const ContactButton = (props) => {
  const { iconColor } = props
  const useStyles = makeStyles((theme) => ({
    container: {
      marginBottom: '4vh',
      backgroundColor: colors.blue,
      color: 'iconColor',
      margin: 'auto',
      width: '30vw',
      height: '10vh',
      display: 'grid',
      borderRadius: '10px',
      gridTemplateColumns: '20% 80%',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: colors.hoverBlue
      }
    },

    mailIcon: {
      color: iconColor,
      margin: 'auto',
      height: '80%',
      gridColumnStart: 1,
      gridColumnEnd: 2,
    },

    contact: {
      color: iconColor,
      margin: 'auto',
      width: '80%',
      fontSize: '3vh',
      fontFamily: 'Cambay',
      textAlign: 'center',
      gridColumnStart: 2,
      gridColumnEnd: 3,
    }
  }))
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <MailIcon className={classes.mailIcon} />
      <Typography className={classes.contact}>Contact Us</Typography>
    </div>
  )
}

export default ContactButton