import React, { FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import SupplyRequest from './Pages/SupplyRequest';
import MaterialOnTheWay from './Pages/MaterialOnTheWay';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path = '/register' element={<Register/>}></Route>   
      <Route path='/SupplyRequest' element ={<SupplyRequest></SupplyRequest>}></Route>
      <Route path='/MaterialOnTheWay' element={<MaterialOnTheWay></MaterialOnTheWay>}></Route>
    </Routes>
  );

};

export default App;
