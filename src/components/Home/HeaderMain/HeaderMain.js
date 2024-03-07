import React from 'react';
import chair from "../../../images/chair.png";
import { Link } from 'react-router-dom';

const HeaderMain = () => {
  return (
    <main style={{height: '550px'}} className="main row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1 style={{color: "#3A4256"}}>Your New Smile <br/> Starts Here</h1>
            <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dignissimos, perspiciatis accusantium perferendis est a?</p>
            {/* <button style={{ background: "#1CC7C1" }} className="btn text-white">Get Appoinment</button> */}
            <Link to="/appointment"><button className="btn btn-primary btn-bg">GET APPOINTMENT</button></Link>
        </div>
        <div className="col-md-6">
            <img className='img-fluid' src={chair} alt="" />
        </div>
    </main>
  )
}

export default HeaderMain