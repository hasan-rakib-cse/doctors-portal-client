import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css'
import { UserContext } from '../../Shared/UserContext/UserContext';
import loadingImage from '../../../images/loadingDribbble.gif'

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100vh"
}

const Dashboard = () => {

  const {loggedInUser, setLoggedInUser} = useContext(UserContext)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDateChange = (date) => {
      setSelectedDate(date)
  }

  useEffect(() => {
    fetch('http://localhost:4000/appointmentsByDate', {
        method: 'POST',
        headers: {'content-type': 'application/json' },
        // body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
        body: JSON.stringify({date: selectedDate})
      })
      .then(res => res.json())
      .then(data => setAppointments(data));
      setIsLoading(false);
  
  }, [selectedDate])
  
  // isLoading && <p>Loading......</p>
  return (
    <section>
      <div style={containerStyle} className='dashboard-container container-fluid row'>
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5 d-flex flex-column justify-content-start align-items-center">
          <h5 className='mb-5 mt-4'>Select Date to See No. of Appointments</h5>
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5">

          {
            isLoading ?
              <p>Loading......</p>
              :
              <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
          }
          
            
        </div>
      </div>
    </section>
  )
}

export default Dashboard