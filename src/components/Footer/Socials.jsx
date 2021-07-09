import React from 'react'

import links from '../../scripts/links'

import SocialButton from './SocialButton'

import { makeStyles } from '@material-ui/core/styles';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Typography from '@material-ui/core/Typography';

const Socials = (props) => {
  const { color } = props

  const useStyles = makeStyles((theme) => ({
    layout: {
      color: color,
      gridColumnStart: 2,
      gridColumnEnd: 3,
      display: 'grid',
      gridTemplateRows: '33% 33% 33%',
      margin: 'auto',
      height: '80%',
      width: '60%',
    },

    instagramSocialButton: {
      color: color,
      gridRowStart: 1,
      gridRowEnd: 2,
      margin: 'auto',
      display: 'grid',
      gridTemplateColumns: '25% 75%',
    },

    facebookSocialButton: {
      color: color,
      gridRowStart: 2,
      gridRowEnd: 3,
      margin: 'auto',
      display: 'grid',
      gridTemplateColumns: '25% 75%',
    },

    youtubeSocialButton: {
      color: color,
      gridRowStart: 3,
      gridRowEnd: 4,
      margin: 'auto',
      display: 'grid',
      gridTemplateColumns: '25% 75%',
    },

    icon: {
      gridColumnStart: 3,
      gridColumnEnd: 4,
      margin: 'auto',
    },

    text: {
      gridColumnStart: 2,
      gridColumnEnd: 3,
      textAlign: 'center',
      margin: 'auto',
      fontFamily: 'Cambay',
      fontSize: '2vh'
    },
  }))
  const classes = useStyles()

  return (
    <div
      className={classes.layout}
    >
      <SocialButton
        color={color}
        className={classes.instagramSocialButton}
        link={links.instagram}
        icon={
          <InstagramIcon
            className={classes.icon}
          />
        }
        title={
          <Typography
            className={classes.text}
          >
            Instagram
          </Typography>
        }
      />

      <SocialButton
        color={color}
        className={classes.facebookSocialButton}
        link={links.facebook}
        icon={
          <FacebookIcon
            className={classes.icon}
          />
        }
        title={
          <Typography
            className={classes.text}
          >
            Facebook
          </Typography>
        }
      />

      <SocialButton
        color={color}
        className={classes.youtubeSocialButton}
        link={links.youtube}
        icon={
          <YouTubeIcon
            className={classes.icon}
          />
        }
        title={
          <Typography
            className={classes.text}
          >
            YouTube
          </Typography>
        }
      />
    </div>
  )
}

export default Socials