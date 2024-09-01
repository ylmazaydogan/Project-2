import React from 'react'
import { Navigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';


export default function Dashboard() {

  const token = window.localStorage.getItem('token');

  if(!token){
    return <Navigate to ="/login"/>
  }

  return (
    <div>
      <Sidebar></Sidebar>
      
    </div>
  )
}
