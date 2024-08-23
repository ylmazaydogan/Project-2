import React from 'react'
import Logo from '../../Logo/Logo';


function Dashboard() {
  return (
    <div className='flex'> 
    {/*Sol Taraf */}
    <div className='w-1/4 h-screen bg-gray-100 p-4'>
      <div className='flex items-center mb-4'>
        <Logo className='w-10 h-10 mr-4'/>
    <div className="text-1g font-semibold mb-4">Constructer v1</div>
    </div>
    <ul>
      <li className="mb-2">
        <a href='#' className='block p-2 bg-green-500 text-white rounded'>Dashboard</a>
      </li>
      <li className='mb-2'><a href='#' className='block p-2'>Supply Requests</a></li>
      <li className='mb-2'><a href='#' className='block p-2'>Materials On The Way</a></li>
      <li className='mb-2'><a href='#' className='block p-2'>Messages</a></li>
      <li className='mt-7 block p-2 font-bold'> Admin Menu</li>
    </ul>
    </div>
      
    </div>
  )
}

export default Dashboard
