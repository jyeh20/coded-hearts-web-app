import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import PDF from "../assets/EPK.pdf"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '100vh',
  },

  embed: {
    width: '100%',
    height: '100%',
  }
}))
const EPK = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <embed
        src={PDF}
        type="application/pdf"
        className={classes.embed}
      />
    </div>
  )
}

export default EPK