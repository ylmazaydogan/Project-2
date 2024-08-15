import React from 'react';
import logo from './tool-icon.jpg'; // Resmi import edin

export default function Logo() {
  return (
    <div>
      <div className="flex justify-center">
        <img
          className="h-16 w-16"
          src={logo} // Import edilen değişkeni burada kullanın
          alt="logo"
        />
      </div>
    </div>
  );
}
