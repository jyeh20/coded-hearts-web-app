import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import colors from '../../scripts/colors';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    width: '100%',
  },

  instagram: {
    margin: 'auto',
    gridColumnStart: 1,
    gridColumnEnd: 2,
    width: '80%',
    cursor: 'pointer',
  },

  facebook: {
    margin: 'auto',
    gridColumnStart: 2,
    gridColumnEnd: 3,
    width: '80%',
    cursor: 'pointer',
  },

  youtube: {
    margin: 'auto',
    gridColumnStart: 3,
    gridColumnEnd: 4,
    width: '80%',
    cursor: 'pointer',
  },

  email: {
    margin: 'auto',
    gridColumnStart: 4,
    gridColumnEnd: 5,
    width: '80%',
  },

  emailButtonLayout: {
    margin: 'auto',
    height: '60%',
    width: '80%',
    backgroundColor: colors.blue,
    display: 'grid',
    gridTemplateColumns: '25% auto',
    borderRadius: 10,
    cursor: 'pointer',
  },

  mailIcon: {
    margin: 'auto',
    gridColumnStart: 1,
    gridColumnEnd: 2,
    width: '80%',
  },

  contactTypography: {
    textAlign: 'center',
    margin: 'auto',
    gridColumnStart: 2,
    gridColumnEnd: 3,
    width: '80%',
    fontSize: '2vh',
    fontFamily: 'Cambay'
  }
}))

const EmailHeader = (props) => {
  const classes = useStyles()
  const { color } = props

  return (
    <div className={classes.emailButtonLayout}>
      <MailIcon
        className={classes.mailIcon}
        style={{color: color}}
      />
      <Typography
        className={classes.contactTypography}
        style={{color: color}}
      >
        Contact Us
      </Typography>
    </div>
  )
}

const Socials = (props) => {
  const classes = useStyles()
  const { color } = props

  return (
    <div className={classes.layout}>
      <InstagramIcon
        className={classes.instagram}
        style={{color: color}}
      />
      <FacebookIcon
        className={classes.facebook}
        style={{color: color}}
      />
      <YouTubeIcon
        className={classes.youtube}
        style={{color: color}}
      />
      <EmailHeader
        className={classes.email}
        color={color}
      />
    </div>
  )
}

export default Socials