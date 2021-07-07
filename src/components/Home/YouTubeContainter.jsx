import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const YouTubeContainer = (props) => {
  const { videoLink } = props
  const width = (5*1920)/108
  const useStyles = makeStyles((theme) => ({
    container: {
      margin: 'auto',
      height: '50vh',
      width: `${width}vh`,
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