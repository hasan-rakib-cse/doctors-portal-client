import React, { useEffect, useState } from 'react'
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AppointmentDataTable from '../../Dashboard/AppointmentDataTable/AppointmentDataTable';
import loadingImage from '../../../images/loadingDribbble.gif'

const AllPatients = () => {

    const [allAppointments, setAllAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/appointments')
        .then(res => res.json())
        .then(data => setAllAppointments(data))
    
    }, [])
    
  return (
    <div className='container-fluid row'>
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">All Patients</h5>
            <AppointmentDataTable allAppointments={allAppointments}></AppointmentDataTable>
            {allAppointments.length === 0  && 
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{width: '50%', height: 'auto'}} src={loadingImage} alt="Loading_Image" />
                </div>
            }
        </div>
    </div>
  )
}

export default AllPatients