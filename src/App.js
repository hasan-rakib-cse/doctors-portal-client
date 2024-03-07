import React, { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate, } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/LoginRegister/Login/Login';
import Register from './components/LoginRegister/Register/Register';
import { UserContext } from './components/Shared/UserContext/UserContext';
import Error from './components/Error/Error';
import PrivateRoute from './components/LoginRegister/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';
import Contact from './components/Contact/Contact/Contact';
import About from './components/About/About/About';
import Blog from './components/Blog/Blog/Blog';
import DentalServices from './components/DentalServices/DentalServices/DentalServices';
import Reviews from './components/Reviews/Reviews/Reviews';

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className='overflow-hidden'>
      <UserContext.Provider value={ [loggedInUser, setLoggedInUser] }>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/appointment' element={<PrivateRoute> <Appointment></Appointment> </PrivateRoute>} />
            <Route path='/about' element={<About></About>} />
            <Route path='/dental-service' element={<DentalServices></DentalServices>} />
            <Route path='/reviews' element={<Reviews></Reviews>} />
            <Route path="/blog" element={<PrivateRoute> <Blog></Blog> </PrivateRoute>} />
            <Route path='/contact' element={<Contact></Contact>} />
            <Route path='/appointment' element={<Appointment></Appointment>} />
            <Route path="/dashboard" element={<PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>} />
            <Route path="/dashboard/appointment" element={<PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>} />
            <Route path='/dashboard/allPatients' element={<AllPatients></AllPatients>} />
            <Route path="/addDoctor" element={<PrivateRoute> <AddDoctor></AddDoctor> </PrivateRoute>} />
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
