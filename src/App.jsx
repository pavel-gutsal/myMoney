import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="app">
      {
        authIsReady && (
          <Routes>
            <Route path="/" element={<NavBar />}>
              { user && <Route index element={<Home />} /> }
              { !user && (<Route index element={<Navigate to="/login" replace />} />)}

              <Route path="/login" element={user ? (<Navigate to="/" replace />) : <Login />} />

              <Route path="/signup" element={user ? (<Navigate to="/" replace />) : <Signup />} />
              <Route path="/home" element={user ? (<Navigate to="/" replace />) : <Navigate to="/login" replace />} />
            </Route>
          </Routes>
        )
      }
    </div>
  );
}

export default App;
