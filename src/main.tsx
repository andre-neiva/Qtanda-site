import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
//import App from './App';
import './index.css';
import ForgetPassword from './pages/ForgetPassword';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// Configure router
const RoutesConfig = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/forget-password" element={<ForgetPassword />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="*" element={<Login />} />
    {/* <Route path="*" element={<App />} /> */}
  </Routes>
);

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RoutesConfig />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
