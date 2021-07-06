import React from 'react'

import colors from '../../scripts/colors'

import Socials from './Socials'
import EPK from './EPK'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'grid',
    gridTemplateColumns: '15vw 35vw 35vw 15vw',
    width: '100vw',
    height: '20vh',
  },
}))

const Footer = (props) => {
  const classes = useStyles()
  const { lightMode } = props

  const getBGColor = () => {
    return (lightMode ? colors.white : colors.black)
  }
  const getIconColor = () => {
    return (lightMode ? colors.black : colors.white)
  }

  return(
    <div
      className={classes.layout}
      style={{backgroundColor: `${getBGColor()}`}}
    >
      <Socials color={`${getIconColor()}`} />
      <EPK color={`${getIconColor()}`} />
    </div>
  )
}

export default Footer