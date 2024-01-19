import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import chair from "../../../images/chair.png";

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{ height: '550px' }} className="container my-4 py-5">
            <div className="row">
                <div className="col-md-5">
                    <h1 style={{ color: "#1CC7C1", marginTop: '0', lineHeight: '.7', marginBottom: '30px' }}>Appoinment</h1>
                    <Calendar onChange={handleDateChange} value={new Date()} />
                </div>
                <div className="col-md-7">
                    <img className='h-75' src={chair} alt="" />
                </div>
            </div>
        </main>
    )
}

export default AppointmentHeader