import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import firebaseFunctions from '../../firebase/firebaseUtil';

import colors from '../../scripts/colors';
import links from '../../scripts/links'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';

const EmailHeader = (props) => {
  const { color } = props

  const useStyles = makeStyles((theme) => ({
    emailButtonLayout: {
      margin: 'auto',
      height: '60%',
      minWidth: '160px',
      width: '80%',
      backgroundColor: colors.blue,
      borderRadius: 10,
      color: color,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: colors.hoverBlue
      }
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
  const classes = useStyles()

  return (
    <Button className={classes.emailButtonLayout} href="/contact" startIcon={<MailIcon />}>
        Contact Us
    </Button>
  )
}

const Socials = (props) => {
  const { color } = props
  const { incrementHeaderInstagram } = firebaseFunctions

  const useStyles = makeStyles((theme) => ({
    layout: {
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto',
      height: '100%',
      width: '100%',
      color: color
    },

    instagramIconButton: {
      color: color,
      margin: 'auto',
      gridColumnStart: 1,
      gridColumnEnd: 2,
      width: '80%',
    },

    instagram: {
      color: color,
      margin: 'auto',
      cursor: 'pointer',
    },

    facebookIconButton: {
      color: color,
      margin: 'auto',
      gridColumnStart: 2,
      gridColumnEnd: 3,
      width: '80%',
    },

    facebook: {
      color: color,
      margin: 'auto',
      cursor: 'pointer',
    },

    youtubeIconButton: {
      color: color,
      margin: 'auto',
      gridColumnStart: 3,
      gridColumnEnd: 4,
      width: '80%',
    },

    youtube: {
      color: color,
      margin: 'auto',
      cursor: 'pointer',
    },

    email: {
      margin: 'auto',
      gridColumnStart: 4,
      gridColumnEnd: 5,
      width: '80%',
    },
  }))
  const classes = useStyles()

  return (
    <div className={classes.layout} >
      <IconButton
        href={links.instagram}
        className={classes.instagramIconButton}
      >
        <InstagramIcon
          className={classes.instagram}
        />
      </IconButton>
      <IconButton
        href={links.facebook}
        className={classes.facebookIconButton}
      >
        <FacebookIcon
          className={classes.facebook}
        />
      </IconButton>
      <IconButton
        href={links.youtube}
        className={classes.youtubeIconButton}
      >
        <YouTubeIcon
          className={classes.youtube}
        />
      </IconButton>
      <EmailHeader
        className={classes.email}
        color={color}
      />
    </div>
  )
}

export default Socials