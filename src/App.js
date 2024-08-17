import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path = '/register' element={<Register/>}></Route>   
    </Routes>
  );
}

export default App;
