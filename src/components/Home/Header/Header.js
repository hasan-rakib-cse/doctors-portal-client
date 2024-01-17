import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeaderMain from '../HeaderMain/HeaderMain'

import chairbg from "../../../images/chairBg.png";

import './Header.css'
import BusinessInfo from '../BusinessInfo/BusinessInfo'

const Header = () => {
  return (
    <div className="header-container">
        <img className='header-container-bg' src={chairbg} alt="" />
        <Navbar></Navbar>
        <HeaderMain></HeaderMain>
        <BusinessInfo></BusinessInfo>
    </div>
  )
}

export default Header