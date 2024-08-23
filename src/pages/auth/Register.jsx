import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import { useForm } from 'react-hook-form';
//import PasswordValidationForm from '../password/PasswordValidationForm';




export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerStatus, setRegisterStatus] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError , setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleChange=(e)=>{
    const {name,value}= e.target;
    if (name === "password"){
      setPassword(value);
    }
    else if (name === "confirmPassword"){
      setConfirmPassword(value);
    }
  };

  const handleRegister = (event) => {
    event.preventDefault(); // Yenilenmesini engelliyor.

    if (password !==confirmPassword){
      setPasswordError("Şifreniz Eşleşmiyor");
      return;
    }

    //Kayıt için kullanılacak schema
    const userData = {
      firstName,
      lastName,
      email,
      password,
    };


    console.log('User Data:', userData);

    navigate('/login');

    //Inputlari temizlemek istersem boyle yapabilirim.
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <Logo />
        <h2 className="text-2xl font-bold mb-5 text-gray-800">Sign up to your account</h2>
        <form onSubmit={handleRegister}>
          <div className="flex justify-between mb-5">
            <input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-1/2 p-2 border border-gray-300 rounded-md mr-2"

            />
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-1/2 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
    
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className='mb-5'>
            <input
              type='password'
              name="confirmPassword"
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={handleChange}
              
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {passwordError && (
              <p className='text-red-500 text-sm mt-2'>{passwordError}</p>
            )}


          </div>
          <button type="submit" className="bg-green text-white py-3 w-full rounded-md mb-4 hover:bg-green-700">
            Sign up
          </button>
          {registerStatus === 'success' && (
            <p className="text-green-500 text-sm">Kayıt başarılı,yönlendiriliyorsunuz.</p>
          )}
          {registerStatus === 'fail' && (
            <p className="text-red-500 text-sm">Kayıt sırasında hata, lütfen tekrar deneyin.</p>
          )}
          <p className="text-sm text-gray-600 font-bold">
            Already have an account?
            <a href="#" className="text-green hover:underline ml-1">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
