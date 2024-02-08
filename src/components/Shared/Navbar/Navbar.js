import React, { useContext } from 'react'
import { UserContext } from '../UserContext/UserContext';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const token = sessionStorage.getItem('token');

    const getSingOut = () => {
        setLoggedInUser({});
        sessionStorage.removeItem('token');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"><NavLink to={'/'} className='navlink me-5'>Home</NavLink></li>
                    <li className="nav-item"><NavLink to={'/appointment'} className='navlink me-5'>Appointment</NavLink></li>
                    <li className="nav-item"><NavLink to={'/about'} className='navlink me-5'>About</NavLink></li>
                    <li className="nav-item"><NavLink to={'/dental-service'} className='navlink me-5'>Dental Services</NavLink></li>
                    <li className="nav-item"><NavLink to={'/reviews'} className='navlink me-5'>Reviews</NavLink></li>
                    <li className="nav-item"><NavLink to={'/blog'} className='navlink me-5'>Blog</NavLink></li>
                    <li className="nav-item"><NavLink to={'/contact-us'} className='navlink me-5'>Contact Us</NavLink></li>
                </ul>
                {(loggedInUser.email || sessionStorage.getItem('token')) && <button onClick={() => (getSingOut())}>Sign Out</button>}
            </div>
        </nav>
    )
}

export default Navbar