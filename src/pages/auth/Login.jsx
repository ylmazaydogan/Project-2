import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import InputComponent from '../../InputComponent/InputComponent';

export default function Login() {
  const [loginStatus, setLoginStatus] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Formun yenilenmesini engeller.

    // Form elemanlarına erişim sağla
    const emailValue = event.target.elements.email.value;
    const passwordValue = event.target.elements.password.value;

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'emilys',  // Kullanıcı adı olarak email kullanıyoruz.
        password: 'emilyspass',
        expiresInMins: 30, // Oturum süresi 30 dakika olarak ayarlanıyor.
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          console.log("Login Success");
          setLoginStatus(true);
          navigate('/dashboard'); // Başarılı girişte dashboard sayfasına yönlendir
        } else {
          console.log("Login Failed");
          setLoginStatus(false);
        }
      })
      .catch((error) => {
        console.log("Login Error", error);
        setLoginStatus(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 p-10 bg-white rounded-xl shadow-lg">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
          Sign in to your account
        </h2>
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <InputComponent
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <InputComponent
                id="password"
                name="password"
                type="password"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-green hover:text-green-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a
            href="#"
            className="font-medium text-green hover:text-green-500"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
