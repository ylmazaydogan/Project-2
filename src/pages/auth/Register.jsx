import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import InputComponent from '../../Components/Input/InputComponent';

export default function Register() {
  const [registerStatus, setRegisterStatus] = useState(null);
  const [passwordError, setPasswordError] = useState('');
  const [passwordLengthError, setPasswordLengthError] = useState('');
  const [passwordPatternError, setPasswordPatternError] = useState('');
  

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault(); // Formun yenilenmesini engeller.


    const { firstName, lastName, email, password, confirmPassword } = e.target.elements;

    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    // Şifre uzunluğunu kontrol ettim.
    if (passwordValue.length < 8) {
      setPasswordLengthError("Şifre en az 8 karakter uzunluğunda olmalıdır.");
      return;
    } else {
      setPasswordLengthError('');
    }

    //Regex kontrolü pattern ekledim.
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    if (!passwordPattern.test(passwordValue)) {
      setPasswordPatternError("Şifreye en az bir küçük harf, bir büyük harf ve bir sayı,özel karakter içermelidir");
      return;
    } else {
      setPasswordPatternError('');
    }

    //Şifreler eşleşip eşleşmediğini burada kontrol ettim.
    if (passwordValue !== confirmPasswordValue) {
      setPasswordError("Şifreniz Eşleşmiyor");
      return;
    } else {
      setPasswordError('');
    }

    //Kullanıcı verileri burada
    const userData = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      password: passwordValue,
    };

    console.log('User Data:', userData);

    //Kayıt başarılı olduğunda bu sayfaya yönlendir.
    setRegisterStatus('Success');
    navigate('/login');

    // Formu sıfırladım.
    e.target.reset();
  };


  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <Logo />
        <h2 className="text-2xl font-bold mb-5 text-gray-800">Sign up to your account</h2>
        <form onSubmit={handleRegister}>
          <div className="flex justify-between mb-5">
            <InputComponent
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-1/2 p-2 border border-gray-300 rounded-md mr-2"
            />
            <InputComponent
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-1/2 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-5">
            <InputComponent
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-5">
          <InputComponent
              {...{
                type: 'text',
                name: 'firstName',
                placeholder: 'First Name',
                className: 'w-1/2 p-2 border border-gray-300 rounded-md mr-2'
              }}
            />
          </div>
          <div className='mb-5'>
            <InputComponent
              type='password'
              name="confirmPassword"
              placeholder='Confirm Password'
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
            <p className="text-green-500 text-sm">Kayıt başarılı, yönlendiriliyorsunuz.</p>
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
