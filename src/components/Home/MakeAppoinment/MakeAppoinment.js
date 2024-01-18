import React from 'react'
import doctor from '../../../images/doctor.png'

import './MakeAppoinment.css'

const MakeAppoinment = () => {
  return (
    <section className='make-appoinment'>
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-none d-md-block">
            <img src={doctor} alt="" />
          </div>
          <div className="col-md-7 text-white py-5 z-1">
            <h5 className='text-uppercase' style={{color: "#1CC7C1"}}>Appoinment</h5>
            <h1 className='my-4'>Make an Appoinment <br/> Today</h1>
            <p className='mb-5 mt-5'>It is a long established fact that a reader will be a reader will be distracted by the readable content of a page when looking at its</p>
            <button className='btn text-white px-4' style={{ background: "#1CC7C1", border: "1px solid#1CC7C1" }}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MakeAppoinment