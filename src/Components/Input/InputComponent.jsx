import React from 'react';

const InputComponent = ({ className, ...props }) => {
  return (
    <input
      className={
        `
        appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
        ${className}
        `
      }
      {...props}
    />
  );
};

export default InputComponent;
