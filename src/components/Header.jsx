import React from 'react';
import { useTheme } from './ThemeContext'; 
import { Link } from 'react-router';
import { useUsername, useAuth } from '../components/authWrapper/AuthContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const username = useUsername();
  const {logout} = useAuth();
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-10 transition-colors">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">DevBlog</h1>
        
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-600 dark:text-gray-300 font-medium">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/posts" className="hover:text-blue-500">Posts</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
            <li> 
              {username ? <p className="hover:text-blue-500" onClick={logout}>Hi {username}, Logout</p> : <Link to="/login" className="hover:text-blue-500">Login</Link> } 
              </li>
          </ul>

          <button 
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;