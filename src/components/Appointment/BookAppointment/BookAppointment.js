import React from 'react'
import BookingCard from '../BookingCard/BookingCard'

const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodonics',
        visitingHour: '08.00 AM - 09.00 AM',
        price: 20,
        totalSpace: 10,
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '09.00 AM - 10.00 AM',
        price: 15,
        totalSpace: 8,
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '10.00 AM - 11.00 AM',
        price: 17,
        totalSpace: 9,
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '11.00 AM - 12.00 PM',
        price: 19,
        totalSpace: 5,
    },
    {
        id: 5,
        subject: 'Pediatric Dental',
        visitingHour: '06.00 PM - 07.00 PM',
        price: 25,
        totalSpace: 10,
    },
    {
        id: 6,
        subject: 'Oral Surgery',
        visitingHour: '07.00 PM - 08.00 PM',
        price: 35,
        totalSpace: 10,
    },
]

const BookAppointment = ({ date }) => {
    return (
        <section>
            <h2 className='text-center text-brand mb-5'>Available Appointments on {date.toDateString()}</h2>
            <div className="container">
                <div className="row">
                    {
                        bookingData.map(booking => <BookingCard key={booking.id} booking={booking} date={date} ></BookingCard>)
                    }
                </div>
            </div>
        </section>
    )
}

export default BookAppointment