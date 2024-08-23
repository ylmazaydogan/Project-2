import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';


function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path = '/register' element={<Register/>}></Route>   
    </Routes>
  );
}

export default App;
