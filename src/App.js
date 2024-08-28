import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import SupplyRequest from './pages/supply-request/SupplyRequest';
import MaterialOnTheWay from './pages/Material-On-The-Way/MaterialOnTheWay';


function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path = '/register' element={<Register/>}></Route>   
      <Route path='/supply-request' element ={<SupplyRequest></SupplyRequest>}></Route>
      <Route path='/Material-On-The-Way' element={<MaterialOnTheWay></MaterialOnTheWay>}></Route>
    </Routes>
  );
}

export default App;
