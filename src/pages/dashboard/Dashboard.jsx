import React from 'react';
import Logo from '../../Logo/Logo';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate(); 

  return (
    <div className='flex'>
      {/* Sol Taraf */}
      <div className='w-1/4 h-screen bg-gray-100 p-4'>
        <div className='flex items-center mb-4'>
          <Logo className='w-10 h-10 mr-4' />
          <div className="text-lg font-semibold mb-4">Constructer v1</div>
        </div>
        <ul>
          <li className="mb-2">
            <button 
              className='block p-2 bg-green-500 text-white rounded w-full text-left' 
              onClick={() => navigate('/dashboard')}
            >
              Dashboard
            </button>
          </li>

          <li className='mb-2'>
            <button 
              className='block p-2 w-full text-left' 
              onClick={() => navigate('/supply-request')} 
            >
              Supply Requests
            </button>
          </li>

          <li className='mb-2'>
            <button 
              className='block p-2 w-full text-left' 
              onClick={() => navigate('/Material-On-The-Way')} 
            >
              Materials On The Way
            </button>
          </li>

          <li className='mb-2'>
            <button 
              className='block p-2 w-full text-left' 
              onClick={() => navigate('/messages')} 
            >
              Messages
            </button>
          </li>

          <li className='mt-7 block p-2 font-bold'> Admin Menu</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
