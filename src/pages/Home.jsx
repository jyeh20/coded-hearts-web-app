import React from 'react'

import staticContent from '../scripts/static'

import cover from '../assets/cover-photo.jpg'
import PerformanceTable from '../components/Home/PerformanceTable'
import YouTubeContainer from '../components/Home/YouTubeContainter'
import ContactButton from '../components/Home/ContactButton'

import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const Home = (props) => {
  const { lightMode, tableColor, bgColor, iconColor, videoLink, performances } = props

  const useStyles = makeStyles((theme) => ({
    layout: {
      paddingBottom: '10vh',
      backgroundColor: bgColor,
      color: iconColor,
    },

    image: {
      zIndex: -1,
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
    },

    body: {
      marginTop: '80vh',
    },

    title: {
      fontFamily: 'Cambay',
      fontSize: '10vh',
      paddingTop: '14vh',
      paddingBottom: '2vh',
      textAlign: 'center',
    },

    bodyText: {
      fontFamily: 'Cambay',
      fontSize: '3vh',
      textAlign: 'center',
      margin: 'auto',
      width: '70%',
    },

    button: {
      margin: 'auto',
    }
  }))
  const classes = useStyles()

  return (
    <div className={classes.layout}>
      <img className={classes.image} src={cover} />
      <div className={classes.body}>
        <Typography className={classes.title}>
          About
        </Typography>
        <Typography className={classes.bodyText} >
          {staticContent.about}
        </Typography>
        <Typography className={classes.title}>
          Upcoming Performances
        </Typography>
        <PerformanceTable
          lightMode={lightMode}
          tableColor={tableColor}
          iconColor={iconColor}
          performances={performances}
        />
        <Typography className={classes.title}>
          Check out our YouTube!
        </Typography>
        <YouTubeContainer
          lightMode={lightMode}
          videoLink={videoLink} />
        <ContactButton
          className={classes.button}
          iconColor={iconColor} />
      </div>
    </div>
  )
}

export default Home