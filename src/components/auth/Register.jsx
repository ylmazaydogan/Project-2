import React, { useState } from 'react';
import Logo from '../../Logo/Logo';

export default function Register() {


  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <Logo></Logo>
        <h2 className="text-2xl font-bold mb-5 text-gray-800">Sign up to your account</h2>
        <form >
          <div className="flex justify-between mb-5">
            <input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="First Name"
            
              className="w-1/2 p-2 border border-gray-300 rounded-md mr-2"
            />
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Last Name"
              
              className="w-1/2 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              name="password"
              placeholder="Password"
              
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" className="bg-green-600 text-white py-3 w-full rounded-md mb-4 hover:bg-green-700">
            Sign up
          </button>
          <p className="text-sm text-gray-600 font-bold">
            Already have an account?
            <a href="#" className="text-green-500 hover:underline ml-1">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
