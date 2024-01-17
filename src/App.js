import React, { useState } from 'react';
import { BrowserRouter,  Route, Routes, useLocation, useNavigate, } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
          
          <Routes>
            <Route path='/' element={<Home></Home>} />
            {/* <Route path='/shop' element={<Shop />} />
            <Route path='/product/:key' element={<ProductDetail />} />
            <Route path='/review' element={<Review />} />
            <Route path="/manageInventory" element={<PrivateRoute> <ManageInventory /> </PrivateRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Error />} /> */}

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
