import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export const UseAuth =()=>{
    const [loginStatus, setLoginStatus] = useState(true);
    const navigate = useNavigate();
  
    const getToken=()=>{
      return localStorage.getItem('token');
    };
  
    useEffect(() => {
      const token = getToken(); 
    
      if (token) {
        fetch('https://dummyjson.com/auth/me', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + token, 
          },
        })
          .then(res => res.json())
          .then(console.log) 
          .catch((error) => console.error('Error fetching user data:', error)); 
      }
    }, []);
    
    const handleLogin = (event) => {
      event.preventDefault(); 
  
      const { username, password } = event.target.elements;
  
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
          expiresInMins: 30,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            console.log("Login Success", data);
            setLoginStatus(true);
  
            localStorage.setItem('token',data.token); 
  
            navigate('/dashboard');
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
    return {
      loginStatus,
      handleLogin,
      token,
    };

};