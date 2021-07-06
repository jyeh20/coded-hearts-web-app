import React, { useState } from 'react'

import colors from '../scripts/colors'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const PageLayout = (props) => {
  // lightMode vs darkMode
  const [lightMode, setLightMode] = useState(false)

  const getBGColor = () => {
    return (lightMode ? colors.white : colors.black)
  }

  const getIconColor = () => {
    return (lightMode ? colors.black : colors.white)
  }

  return (
    <div style={{backgroundColor: `${getBGColor()}`}}>
      <Header bgColor={`${getBGColor()}`} iconColor={`${getIconColor()}`} lightMode={lightMode} toggleLightMode={setLightMode} />
      <Footer bgColor={`${getBGColor()}`} iconColor={`${getIconColor()}`} />
    </div>
  )
}

export default PageLayout