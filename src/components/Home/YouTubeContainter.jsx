import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const YouTubeContainer = (props) => {
  const { videoLink } = props
  const height = 70
  const width = (height*1920)/1080
  const useStyles = makeStyles((theme) => ({
    container: {
      margin: 'auto',
      height: `${height}vh`,
      width: `${width}vh`,
      marginTop: '10vh',
      marginBottom: '20vh'
    }
  }))
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <iframe
        width="100%"
        height="100%"
        src={videoLink}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  )
}

export default YouTubeContainer