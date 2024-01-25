import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../Shared/UserContext/UserContext';


// const PrivateRoute = ({ children, redirectTo }) => {
const PrivateRoute = ({ children }) => {
    const location = useLocation();
    console.log(location)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (loggedInUser.email || sessionStorage.getItem('token')) ? children : <Navigate to='/login' state={{from: location}} replace />;
}

export default PrivateRoute;