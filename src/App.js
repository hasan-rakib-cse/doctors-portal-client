import React, { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate, } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/LoginRegister/Login/Login';
import Register from './components/LoginRegister/Register/Register';
import { UserContext } from './components/Shared/UserContext/UserContext';
import Error from './components/Error/Error';
import About from './components/About/About';
import DentalServices from './components/DentalServices/DentalServices';
import Reviews from './components/Reviews/Reviews';
import Blog from './components/Blog/Blog';
import ContactUs from './components/ContactUs/ContactUs';
import PrivateRoute from './components/LoginRegister/PrivateRoute/PrivateRoute';

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className='overflow-hidden'>
      <UserContext.Provider value={ [loggedInUser, setLoggedInUser] }>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/about' element={<About></About>} />
            <Route path='/dental-service' element={<DentalServices></DentalServices>} />
            <Route path='/reviews' element={<Reviews></Reviews>} />
            <Route path="/blog" element={<PrivateRoute> <Blog></Blog> </PrivateRoute>} />
            <Route path='/contact-us' element={<ContactUs></ContactUs>} />
            <Route path='/appointment' element={<Appointment></Appointment>} />
            <Route path='/login' element={<Login></Login>} />
            <Route path='/register' element={<Register></Register>} />
            <Route path='*' element={<Error></Error>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
