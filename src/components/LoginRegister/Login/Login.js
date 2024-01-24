import React, { useContext, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import { createUserWithEmailPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, resetPassword, signInWithEmailPassword } from '../LoginRegisterManager/LoginRegisterManager'
import { UserContext } from '../../Shared/UserContext/UserContext';
import LoginBg from '../../../images/login.png';
import './Login.css'

const Login = () => {

  document.title = "Login Page";

  const [loading, setIsLoading] = useState(true);
  const [nweUser, setNewUser] = useState(false);

  // Use context Api for data passing anywhere
  const [loggenInUser, setLoggedInUser] = useContext(UserContext);

  // When logged-in the redirect the wanted page.
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  // Set the login state and login information
  const [user, setUser] = useState({
    isSignin: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: ''
  })

  // Initialize Firebase
  initializeLoginFramework();

  // Sign In with Google
  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true)
      });
  }

  // Sign Out with Google
  const signOut = () => {
    handleSignOut()
      .then(res => {
        handleResponse(res, false)
      })
  }

  // Save email & password in state
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 5;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  // Submit Form
  const handleSubmit = (event) => {
    event.preventDefault();

    // Sign Up with Email & Password
    if (user.email && user.password) {
      createUserWithEmailPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponse(res, true);
          setIsLoading(false)
        })
    }

    // Sign In with Email & Password
    if (user.email && user.password) {
      signInWithEmailPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true)
          setIsLoading(false)
        })
    }
  }

  // same code optimized.
  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      navigate(from, { replace: true });
    }
  }

  loading && <p>Loading....</p>

  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow ps-5 pe-5 pb-5">
          <h4 className='login-title text-brand text-center my-4'>Login Page</h4>

          <form action="" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="">Email</label>
              <input type="email" onBlur={handleBlur} name='email' className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" onBlur={handleBlur} name='password' className="form-control" />
            </div>
            <div className="form-group mb-3">
              <button onClick={() => resetPassword(user.email)} className='text-danger border-0 bg-transparent'>Forget or Reset Password</button>
            </div>
            <div className="from-group">
              <button type='submit' className="btn btn-brand w-100">Sign in</button>
            </div>
          </form>

          <div className='separator'>or</div>
          <div className="from-group mb-3 text-center">
            <button onClick={googleSignIn} className="btn btn-success">Sign in with Google</button>
          </div>
          <div className="from-group mt-4">
            <p>Don't Have an Account? <button className='bg-transparent border-0 text-primary' onClick={() => { navigate("/register") }}>Register Now</button></p>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login