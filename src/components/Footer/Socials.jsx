import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  layout: {
    gridColumnStart: 2,
    gridColumnEnd: 3,
    display: 'grid',
    gridTemplateRows: '33% 33% 33%',
    gridTemplateColumns: '50% 50%',
    margin: 'auto',
    height: '80%',
    width: '60%',
  },

  instagramIcon: {
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 1,
    gridColumnEnd: 2,
    margin: 'auto',
  },

  instagramText: {
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 2,
    gridColumnEnd: 3,
    margin: 'auto',
    fontFamily: 'Cambay',
    fontSize: '2vh'
  },

  facebookIcon: {
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 1,
    gridColumnEnd: 2,
    margin: 'auto',
  },

  facebookText: {
    gridRowStart: 2,
    gridRowEnd: 3,
    gridColumnStart: 2,
    gridColumnEnd: 3,
    margin: 'auto',
    fontFamily: 'Cambay',
    fontSize: '2vh'
  },

  youtubeIcon: {
    gridRowStart: 3,
    gridRowEnd: 4,
    gridColumnStart: 1,
    gridColumnEnd: 2,
    margin: 'auto',
  },

  youtubeText: {
    gridRowStart: 3,
    gridRowEnd: 4,
    gridColumnStart: 2,
    gridColumnEnd: 3,
    margin: 'auto',
    fontFamily: 'Cambay',
    fontSize: '2vh'
  },
}))

const Socials = (props) => {
  const classes = useStyles()
  const { color } = props

  return (
    <div
      className={classes.layout}
    >
      <InstagramIcon
        className={classes.instagramIcon}
        style={{color: color}}
      />
      <Typography
        className={classes.instagramText}
        style={{color: color}}
      >
        Instagram
      </Typography>
      <FacebookIcon
        className={classes.facebookIcon}
        style={{color: color}}
      />
      <Typography
        className={classes.facebookText}
        style={{color: color}}
      >
        Facebook
      </Typography>
      <YouTubeIcon
        className={classes.youtubeIcon}
        style={{color: color}}
      />
      <Typography
        className={classes.youtubeText}
        style={{color: color}}
      >
        Youtube
      </Typography>
    </div>
  )
}

export default Socials