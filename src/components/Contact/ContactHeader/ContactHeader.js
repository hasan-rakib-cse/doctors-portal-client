import React from 'react'

import Navbar from '../../Shared/Navbar/Navbar'
import ContactMain from '../ContactMain/ContactMain'
import './ContactHeader.css'

const ContactHeader = () => {
  return (
    <div className="header-container">
        <Navbar></Navbar>
        <ContactMain></ContactMain>
    </div>
  )
}

export default ContactHeader
