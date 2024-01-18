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