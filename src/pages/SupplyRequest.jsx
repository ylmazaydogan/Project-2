import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';


export default function SupplyRequest() {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <Sidebar>

      </Sidebar>
    <div className='flex-1 p-5'>
      {/*Başlık kısmı */}
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-2x1 font-bold'> Supply Request</h1>
          <button className='py-3 px-4 bg-green text-white rounded-lg'>Create New Request</button>
        </div>

        {/*Arama ve filtre */}
        <div className='flex items-center justify-between mb-4'>
          <input type='text' placeholder='Search request...' className='flex w-72 flex-col items-end gap-6'></input>
          <div className='flex space-x-2'>
            <button className="py-2 px-4 border rounded-lg">Site Filter</button>
            <button className="py-2 px-4 border rounded-lg">Date Filter</button>
          </div>
        </div>

        
    </div>

    </div>
  )
}
