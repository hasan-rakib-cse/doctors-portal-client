import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import Navbar from '../../Shared/Navbar/Navbar'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader'
import './Appoinment.css'

const Appointment = () => {
  return (
    <div className='appointment-container'>
        <Navbar></Navbar>
        <AppointmentHeader></AppointmentHeader>
        <Footer></Footer>
    </div>
  )
}

export default Appointment