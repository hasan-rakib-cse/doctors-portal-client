import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate, } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/LoginRegister/Login/Login';
import Register from './components/LoginRegister/Register/Register';
import { UserContext } from './components/Shared/UserContext/UserContext';
import Error from './components/Error/Error';

function App() {

  const [loggenInUser, setLoggedInUser] = useState({});

  return (
    <div className='overflow-hidden'>
      <UserContext.Provider value={ [loggenInUser, setLoggedInUser] }>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/appointment' element={<Appointment></Appointment>} />
            <Route path='/login' element={<Login></Login>} />
            <Route path='/register' element={<Register></Register>} />
            <Route path='/error' element={<Error></Error>} />
            {/* <Route path='/shop' element={<Shop />} />
            <Route path='/product/:key' element={<ProductDetail />} />
            <Route path='/review' element={<Review />} />
            <Route path="/manageInventory" element={<PrivateRoute> <ManageInventory /> </PrivateRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Error />} /> */}
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
