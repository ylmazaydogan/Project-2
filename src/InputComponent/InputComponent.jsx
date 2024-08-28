import React from 'react';

const InputComponent = ({ type, id, name, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

export default InputComponent;