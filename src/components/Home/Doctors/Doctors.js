import React from 'react'

import Doctor from '../Doctor/Doctor'
import doctorImage from '../../../images/doctor-small.png'

const doctorData = [
    {
        name: "Fluoride Treatment",
        img: doctorImage
    },
    {
        name: "Cavity Filling",
        img: doctorImage
    },
    {
        name: "Teeth Whitening",
        img: doctorImage
    }
];

const Doctors = () => {
    return (
        <section className="doctors my-5 py-5">
            <div className="container">
                <h5 style={{ color: "#1CC7C1" }} className="text-center mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctorData.map((dcotorInfo, index) => <Doctor key={index}  dcotorInfo={dcotorInfo} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Doctors