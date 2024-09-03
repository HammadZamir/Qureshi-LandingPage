import React from 'react';
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[131px] py-4 px-6 bg-white shadow-md">

      <div className="flex items-center ml-16">
        <img
          src={logo} 
          alt="Logo"
          className="h-28 w-28 mr-2"
        />
        <div className="flex flex-col text-xl  font-bold text-[#82D026]">
            <span className='text-4xl'> Qureshi </span>
            <span className="text-black text-center text-2xl">Family</span>
        </div>
      </div>


      <div className="flex space-x-6 text-3xl font-medium">
        <button className="text-black hover:text-green-600">Explore</button>
        <button className="text-black hover:text-green-600">Expand</button>
        <button className="text-black hover:text-green-600">Endorse</button>
        <button className="text-black hover:text-green-600">Login</button>
      </div>

      <div className="relative text-2xl p-1 border-2 rounded-full border-black">
        <input
          type="text"
          className="ml-6 py-2 rounded-full px-4 pl-10  focus:outline-none"
          placeholder="Search"
        />
        <FaSearch className="absolute top-5 left-9 text-[#82D026]" />
      </div>
    </nav>
  );
};

export default Navbar;
