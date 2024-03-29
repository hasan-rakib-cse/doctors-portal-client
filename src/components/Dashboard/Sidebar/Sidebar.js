import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../Shared/UserContext/UserContext';

const Sidebar = () => {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const [isDoctor, setIsDoctor] = useState(false)

    // useEffect(() => {
    //     fetch('http://localhost:4000/isDoctor', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsDoctor(data));
    // }, [])

    return (
        // <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
        //     <ul className="list-unstyled">
        //         <li>
        //             <Link to="/doctor/dashboard" className="text-white">
        //                 <FontAwesomeIcon className='icon' icon={faGripHorizontal} /> <span>Dashboard</span>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to="/doctor/appointment" className="text-white">
        //                 <FontAwesomeIcon className='icon' icon={faCalendar} /> <span>Appointment</span>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to="/doctor/patients" className="text-white">
        //                 <FontAwesomeIcon className='icon' icon={faUsers} /> <span>Patients</span>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to="/addDoctor" className="text-white" >
        //                 <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to="/doctor/prescriptions" className="text-white">
        //                 <FontAwesomeIcon className='icon' icon={faFileAlt} /> <span>Prescriptions</span>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to="/doctor/setting" className="text-white" >
        //                 <FontAwesomeIcon className='icon' icon={faCog} /> <span>Setting</span>
        //             </Link>
        //         </li>
        //     </ul>
        //     <div>
        //         <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        //     </div>
        // </div>
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon className='icon' icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                {
                    isDoctor && <div>
                        <li>
                            <Link to="/doctor/appointment" className="text-white">
                                <FontAwesomeIcon className='icon' icon={faCalendar} /> <span>Appointment</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/allPatients" className="text-white">
                                <FontAwesomeIcon className='icon' icon={faUsers} /> <span>Patients</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addDoctor" className="text-white" >
                                <FontAwesomeIcon className='icon' icon={faUserPlus} /> <span>Add Doctor</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/prescriptions" className="text-white">
                                <FontAwesomeIcon className='icon' icon={faFileAlt} /> <span>Prescriptions</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/setting" className="text-white" >
                                <FontAwesomeIcon className='icon' icon={faCog} /> <span>Setting</span>
                            </Link>
                        </li>
                    </div>
                }

            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon className='icon' icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;