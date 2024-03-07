import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = (props) => {
    const {name, img} = props.dcotorInfo
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3 w-75" src={img} alt="" />
            <h5>{name}</h5>
            <p><FontAwesomeIcon style={{ color: "#1CC7C1" }} icon={faPhoneAlt} /> +880-188-934789</p>
        </div>
    );
};

export default Doctor;

// import React, { useEffect, useState } from 'react';
// import DoctorPost from '../DoctorPost/DoctorPost';

// const Doctor = () => {
//   const [doctors, setDoctors] = useState([])
//     // useEffect( () => {
//     //     fetch('http://localhost:4000/doctors')
//     //     .then(res => res.json())
//     //     .then(data => setDoctors(data))
//     // }, [])
//   return (
//     <section className="my-5 pb-5">
//       <div className="container">
//         <h4 className="font-weight-bold text-center text-brand">Our Doctors</h4>
//         <div className="row mt-5">
//         {
//           doctors.map(doctorData => <DoctorPost key={doctorData._id} doctorData={doctorData}></DoctorPost>)
//         }
//         </div>

//       </div>

//     </section>
//   );
// };

// export default Doctor;