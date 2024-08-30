import React from 'react';
import Logo from '../../Logo/Logo';
import { FaTachometerAlt, FaTruck, FaBox, FaEnvelope, FaMapMarkerAlt, FaUsers, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const navigate=useNavigate();

  return (
    <div className="w-64 bg-white shadow-md min-h-screen">
      
      <div className="p-4 flex items-center">
        <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
          
          <Logo className="w-8 h-8" /> 
        </div>
        <h1 className="ml-2 text-xl font-bold">Constructer v1</h1>
      </div>

      
      <div className="mt-4">
        <h2 className="px-4 text-sm font-semibold text-gray-500">Main Menu</h2>
        <ul className="mt-2">
          <li className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center cursor-pointer">
            <FaTachometerAlt className="mr-4" /> Dashboard
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
            onClick={()=> navigate('/SupplyRequest')}>
            <FaBox className="mr-4" /> Supply Request
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
            onClick={()=> navigate('/MaterialOnTheWay')}>
            <FaTruck className="mr-4" /> Materials On The Way
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
            <FaEnvelope className="mr-4" /> Messages 
          </li>
        </ul>
      </div>

      
      <div className="mt-6">
        <h2 className="px-4 text-sm font-semibold text-gray-500">Admin Menü</h2>
        <ul className="mt-2">
          <li className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
            <FaMapMarkerAlt className="mr-4" /> Sites
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
            <FaUsers className="mr-4" /> Site Managers
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
            <FaShoppingCart className="mr-4" /> Purchase Managers
          </li>
        </ul>
      </div>

      
      <div className="p-4">
        <button className="w-full py-2 bg-green-500 bg-green rounded-lg hover:bg-green-600 flex items-center justify-center">
        Log Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;