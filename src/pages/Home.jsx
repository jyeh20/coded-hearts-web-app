import React from 'react'

import cover from '../assets/cover-photo.jpg'
import PerformanceTable from '../components/Home/PerformanceTable'
import YouTubeContainer from '../components/Home/YouTubeContainter'
import ContactButton from '../components/Home/ContactButton'

import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const Home = (props) => {
  const { lightMode, tableColor, bgColor, iconColor, videoLink } = props

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sit amet nisl suscipit adipiscing bibendum. Eu non diam phasellus vestibulum. Adipiscing vitae proin sagittis nisl rhoncus mattis
          rhoncus urna neque. Id diam maecenas ultricies mi eget mauris pharetra. Habitasse platea dictumst vestibulum rhoncus est pellentesque
          elit ullamcorper. Vitae auctor eu augue ut lectus. Ipsum a arcu cursus vitae. Sed blandit libero volutpat sed cras ornare arcu
          dui. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Proin libero nunc consequat interdum varius sit. Enim
          sit amet venenatis urna cursus eget nunc scelerisque viverra. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque
          elit ullamcorper. Ullamcorper malesuada proin libero nunc consequat interdum. Facilisi cras fermentum odio eu feugiat. Ac
          ut consequat semper viverra nam libero justo laoreet sit. Justo eget magna fermentum iaculis eu non diam phasellus. Morbi
          blandit cursus risus at ultrices mi tempus. Quisque non tellus orci ac auctor augue mauris. Diam vulputate ut pharetra sit
          amet aliquam id diam.
        </Typography>
        <Typography className={classes.title}>
          Upcoming Performances
        </Typography>
        <PerformanceTable lightMode={lightMode} tableColor={tableColor} iconColor={iconColor} />
        <Typography className={classes.title}>
          Check out our YouTube!
        </Typography>
        <YouTubeContainer lightMode={lightMode} videoLink={videoLink} />
        <ContactButton className={classes.button} iconColor={iconColor} />
      </div>
    </div>
  )
}

export default Home