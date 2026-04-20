import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../components/authWrapper/AuthContext';

function Login() {
    const {login} = useAuth();
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(userData);
        login(userData.username);
    }
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className="max-w-96 gap-4 m-12">
        <form className="flex flex-col gap-4" onSubmit = {onSubmit}>
            <input
                placeholder = "Username"
                className = "border"
                value = {userData.username} onChange = {e => setUserData({...userData, username: e.target.value})}/>
            <input 
                placeholder = "Password"
                type = "password"
                className = "border"
                value = {userData.password} onChange = {e => setUserData({...userData, password: e.target.value})}/>

            <button type = "submit"  className = "bg-amber-400 w-fir px-8 rounded-2x1 text-white">Submit</button>
        </form>
        
      </div>
      
      <Footer />
    </div>
  )
}

export default Login
