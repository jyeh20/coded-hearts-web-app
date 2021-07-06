import React, { useState } from 'react'

import colors from '../scripts/colors'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const PageLayout = (props) => {
  // lightMode vs darkMode
  const [lightMode, setLightMode] = useState(false)

  const BGColor = lightMode ? colors.white : colors.black

  const iconColor = lightMode ? colors.black : colors.white

  return (
    <div style={{backgroundColor: `${BGColor}`}}>
      <Header bgColor={`${BGColor}`} iconColor={`${iconColor}`} lightMode={lightMode} toggleLightMode={setLightMode} />
      <Footer bgColor={`${BGColor}`} iconColor={`${iconColor}`} />
    </div>
  )
}

export default PageLayout