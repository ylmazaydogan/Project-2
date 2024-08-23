import React from 'react';
import logo from './tool-icon.jpg'; // Resmi import ettim

export default function Logo() {
  return (
    <div>
      <div className="flex justify-center">
        <img
          className="h-16 w-16"
          src={logo} // Import edilen degiskeni burada kullandim.
          alt="logo"
        />
      </div>
    </div>
  );
}
