import React from 'react'

import Navbar from '../../Shared/Navbar/Navbar'
import './DentalServicesHeader.css'
import DentalServicesMain from '../DentalServicesMain/DentalServicesMain'

const DentalServicesHeader = () => {
  return (
    <div className="header-container">
        <Navbar></Navbar>
        <DentalServicesMain></DentalServicesMain>
    </div>
  )
}

export default DentalServicesHeader
