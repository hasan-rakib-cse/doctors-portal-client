import React from 'react';
import doctor from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const DoctorPost = ({doctorData}) => {
  return (
    <div className="col-md-4 text-center">
      <img className="img-fluid mb-3" src={doctor} alt=""/>
      {
        doctorData && <img style={{height: '200px'}} src={`data:image/png;base64,${doctorData.image.img}`} alt=""/>
      }
      <h5 className="font-weight-bold">{doctorData.name}</h5>
      <p className="text-secondary"><FontAwesomeIcon className="info-icon" style={{height: '18px', width: '18px'}} icon={faPhoneAlt} />+61 452 200 126</p>
    </div>
  );
};

export default DoctorPost;