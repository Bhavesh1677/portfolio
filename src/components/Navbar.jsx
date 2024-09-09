import React, { useState } from 'react';
import ThemeBtn from './ThemeBtn';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='flex justify-between items-center h-16 top-0 w-full bg-indigo-200 dark:bg-indigo-900 dark:text-white fixed px-4'>
      {/* Logo */}
      <div>
        <div className="text-4xl font-extrabold ...">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            BVP.WEB
          </span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className='flex justify-between items-center'>
          <li><a className='text-xl mx-3 hover:text-pink-600' href="#home">Home</a></li>
          <li><a className='text-xl mx-3 hover:text-pink-600' href="#about">About</a></li>
          <li><a className='text-xl mx-3 hover:text-pink-600' href="#services">Services</a></li>
          <li><a className='text-xl mx-3 hover:text-pink-600' href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="dark:text-white">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={showMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />

          </svg>
        </button>
      </div>

      {/* Theme Button */}
      <div className="hidden md:block"> {/* Hide on mobile */}
        <ThemeBtn />
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden absolute top-16 right-4 bg-indigo-200 dark:bg-indigo-900  daark:text-white w-48 py-2 rounded-md shadow-md">
          <ul>
            <li><a className='block px-4 py-2 hover:bg-indigo-300' href="#home">Home</a></li>
            <li><a className='block px-4 py-2 hover:bg-indigo-300' href="#about">About</a></li>
            <li><a className='block px-4 py-2 hover:bg-indigo-300' href="#services">Services</a></li>
            <li><a className='block px-4 py-2 hover:bg-indigo-300' href="#contact">Contact</a></li>
            <li className="px-4 py-2"> {/* Theme button inside mobile menu */}
              <ThemeBtn />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}