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
    <div className='flex flex-col min-h-screen bg-white transition-colors'>
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-12">

        <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    {/* Heading Match */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                            Welcome <span className="text-blue-600 dark:text-blue-400">Back</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                            Please enter your details to sign in.
                        </p>
                    </div>

          <form className="flex flex-col gap-4" onSubmit = {onSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
              <input
                  placeholder = "Username"
                  className = "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:text-white"
                  value = {userData.username} onChange = {e => setUserData({...userData, username: e.target.value})}/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
              <input 
                  placeholder = "Password"
                  type = "password"
                  className = "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:text-white"
                  value = {userData.password} onChange = {e => setUserData({...userData, password: e.target.value})}/>
            </div>

            <button type = "submit"  className = "w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all mt-2">Submit</button>
          </form>
          
        </div>
      </main> 
      <Footer />
    </div>
  )
}

export default Login
