import React, { useState } from 'react'
import AppointmentForm from '../AppointmentForm/AppointmentForm'

const BookingCard = ({booking, date}) => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
      setIsOpen(true);
  }

  function closeModal() {
      setIsOpen(false);
  }

  return (
    <div className='col-md-4 mb-5'>
        <div className="card p-3 border-0" style={{boxShadow: "0 .1rem .5rem rgba(0, 0, 0, 0.175)"}}>
            <div className="card-body text-center">
                <h5 className='card-title text-brand'>{booking.subject}</h5>
                <h6>{booking.visitingHour}</h6>
                <p>{booking.totalSpace} SPACES AVAILABLE</p>
                <button onClick={openModal} className='btn btn-brand text-uppercase'>Book Appointment</button>
                <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject} date={date}></AppointmentForm>
            </div>
        </div>
    </div>
  )
}

export default BookingCard