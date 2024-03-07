import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../Shared/UserContext/UserContext';
import { jwtDecode  } from "jwt-decode";


// const PrivateRoute = ({ children, redirectTo }) => {
const PrivateRoute = ({ children }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();
    console.log(location);

    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        }
        const decodedToken = jwtDecode (token);
        // get current time
        const currentTime = new Date().getTime() / 1000;
        // compare the expiration time with the current time
        // will return false if expired and will return true if not expired
        return decodedToken.exp > currentTime;
    }

    // return (loggedInUser.email || sessionStorage.getItem('token')) ? children : <Navigate to='/login' state={{ from: location }} replace />;
    return (loggedInUser.email || isLoggedIn()) ? children : <Navigate to='/login' state={{ from: location }} replace />;

}

export default PrivateRoute;