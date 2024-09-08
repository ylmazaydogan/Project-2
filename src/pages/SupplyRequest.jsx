import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';

export default function SupplyRequest() {

  const [products, setProducts] = useState([]);
  const [siteFilter, setSiteFilter] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [dateFilter, setDateFilter] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products); 
      })
      .catch((error) => console.error('Hata', error));
  }, []);

  const handleSiteFilter = () => {
    if (siteFilter) {
      const filtered = products.filter(product => product.title.includes(siteFilter));
      setFilteredProducts(filtered); 
    } else {
      setFilteredProducts(products); 
    }
  };

  // const handleDateFilter = () => {
  //   if (dateFilter) {
      
  //   } else {
  //     setFilteredProducts(products); 
  //   }
  // };

  const toggleDropdown = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  return (
    <div className='flex min-h-screen bg-gray-100'>
      <Sidebar />

      <div className='flex-1 p-5'>
        {/* Başlık kısmı */}
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-2xl font-bold'>Supply Request</h1>
          <button className='py-3 px-4 bg-green-500 text-white rounded-lg'>Create New Request</button>
        </div>

       -
        <div className='flex items-center justify-between mb-4'>
          <input
            type='text'
            placeholder='Search request...'
            className='flex w-72 flex-col items-end gap-6'
            onChange={(e) => setSiteFilter(e.target.value)}
          />
          <div className='flex space-x-2'>
            <button className='py-2 px-4 border rounded-lg' onClick={handleSiteFilter}>Site Filter</button>
            <button className='py-2 px-4 border rounded-lg' onClick={handleDateFilter}>Date Filter</button>
          </div>
        </div>

       
        <div className='overflow-x-auto bg-white shadow-md rounded-lg'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray upper tracking-wider'>
                  <input type="checkbox" />
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Title</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Description</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Price</th>
                <th className='px-5 py-3'></th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {filteredProducts.map((product) => (
                <tr key={product.id} className='relative'>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <input type='checkbox' />
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>{product.title}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{product.description}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>${product.price}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative'>
                    <button
                      className='text-blue-600 hover:text-blue-900'
                      onClick={() => toggleDropdown(product.id)}
                    >
                      Actions
                    </button>

                    
                    {activeDropdown === product.id && (
                      <div className='absolute z-10 mt-2 right-0 w-48 bg-white border border-gray-200 shadow-lg'>
                        <button className='block w-full text-left px-4 py-2 text-sm hover:bg-gray-100'>
                          Update
                        </button>
                        <button className='block w-full text-left px-4 py-2 text-sm hover:bg-gray-100'>
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
