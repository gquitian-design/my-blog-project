import React from 'react';
import { useTheme } from './ThemeContext'; 

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-10 transition-colors">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">DevBlog</h1>
        
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-600 dark:text-gray-300 font-medium">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/posts" className="hover:text-blue-500">Posts</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
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