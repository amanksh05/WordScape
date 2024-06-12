import React from 'react'
import logo from '../assets/logo.png'
function Logo({width = '1000px'}) {
  return (
    <div>
      <img src={logo} alt="" style={{width:'200px',height:'auto'}}/>
    </div>
  )
}

export default Logo