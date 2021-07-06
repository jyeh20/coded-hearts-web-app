import React, { useState } from 'react'

import colors from '../scripts/colors'

import Header from '../components/Header/Header'

const PageLayout = (props) => {
  // lightMode vs darkMode
  const [lightMode, setLightMode] = useState(false)

  const getBGColor = () => {
    return (lightMode ? colors.white : colors.black)
  }

  return (
    <div style={{backgroundColor: `${getBGColor()}`}}>
      <Header lightMode={lightMode} toggleLightMode={setLightMode} />
    </div>
  )
}

export default PageLayout