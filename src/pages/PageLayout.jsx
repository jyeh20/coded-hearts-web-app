import React, { useState } from 'react'

import colors from '../scripts/colors'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from './Home/Home'

const PageLayout = (props) => {
  // lightMode vs darkMode
  const [lightMode, setLightMode] = useState(false)

  const BGColor = lightMode ? colors.white : colors.black
  const tableColor = lightMode ? colors.lightGrey : colors.darkGrey
  const iconColor = lightMode ? colors.black : colors.white

  return (
    <div>
      <Header bgColor={BGColor} iconColor={iconColor} lightMode={lightMode} toggleLightMode={setLightMode} />
      <Home lightMode={lightMode} tableColor = {tableColor} bgColor={BGColor} iconColor={iconColor} videoLink="https://www.youtube.com/embed/d5rdoVyuDZk" />
      <Footer bgColor={BGColor} iconColor={iconColor} />
    </div>
  )
}

export default PageLayout