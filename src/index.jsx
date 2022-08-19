/*eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import { DarkModeContextProvider } from './Context/DarkModeContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <DarkModeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DarkModeContextProvider >
  </AuthContextProvider>
);
