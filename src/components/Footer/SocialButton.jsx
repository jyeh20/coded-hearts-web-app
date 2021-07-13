import React from 'react'

import { withStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const SocialButton = (props) => {
  const {
    color,
    link,
    icon,
    title
  } = props

  const FancyButton = withStyles({
    layout: {
      display: 'grid',
      width: '100%',
      gridTemplateColumns: '25% 75%',
      margin: 'auto',
    }
  })(Button)

  const useStyles = makeStyles((theme) => ({
    layout: {
      color: color,
    }
  }))

  const classes = useStyles()

  return (
    <FancyButton
      className={classes.layout}
      href={link}
    >
      {icon}
      {title}
    </FancyButton>
  )
}

export default SocialButton