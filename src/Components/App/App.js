// CSS
import './App.css';
// React Imports
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router';
//Component Imports
import LogIn from '../LogIn/LogIn';
import Main from '../Main/Main';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <LogIn setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/home"
          element={
            <Main />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
