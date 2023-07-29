import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from 'react-router-dom'
import './Login.scss';

const LogIn = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate here

  const handleLogin = (event) => {
    event.preventDefault();

    // Perform authentication logic here
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
      setIsLoggedIn(true);
      navigate('/home'); // Redirect to the home route after successful login
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='LogIn'>
      <div className='login-box'>
        <h2>Login</h2>
        <form className='login-form' onSubmit={handleLogin}>
          <div className='form-group'>
            <label className='login-label' htmlFor='username'>
              Username
            </label>
            <input
              className='login-input'
              type='text'
              id='username'
              placeholder='Enter your username'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label className='login-label' htmlFor='password'>
              Password
            </label>
            <input
              className='login-input'
              type='password'
              id='password'
              placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='button-container'>
            <button className='submit' type='submit'>
              Submit
            </button>
            <div className='links'>
              <span className='link'>Create an Account</span>
              <span className='forgot-password link'>Forgot Password?</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;