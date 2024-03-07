import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentHeader.css'

import chair from "../../../images/chair.png";

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const AppointmentHeader = ({ handleDateChange }) => {

    return (
        // <main style={{ height: '550px' }} className="container my-4 py-5">
        //     <div className="row">
        //         <div className="col-md-5">
        //             <h1 style={{ color: "#1CC7C1", marginTop: '0', lineHeight: '.7', marginBottom: '30px' }}>Appoinment</h1>
        //             <Calendar onChange={handleDateChange} value={new Date()} />
        //         </div>
        //         <div className="col-md-7">
        //             <img className='h-75' src={chair} alt="" />
        //         </div>
        //     </div>
        // </main>
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }} className="font-weight-bold pb-4 text-center">Appointment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    )
}

export default AppointmentHeader