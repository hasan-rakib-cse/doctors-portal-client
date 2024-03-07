import React from 'react'

import Navbar from '../../Shared/Navbar/Navbar'
import AboutMain from '../AboutMain/AboutMain'
import './AboutHeader.css'

const AboutHeader = () => {
  return (
    <div className="header-container">
        <Navbar></Navbar>
        <AboutMain></AboutMain>
    </div>
  )
}

export default AboutHeader
