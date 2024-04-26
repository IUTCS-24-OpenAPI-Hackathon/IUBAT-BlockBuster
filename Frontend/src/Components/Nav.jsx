import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [ismenuOpen, setismenu] = useState(false);

  const toggoleMenu = () => {
    setismenu(!ismenuOpen);
  }

  
  return (
    <header className='bg-black fixed top-0 right-0 left-0'>
      <nav className='px-5 py-5 max-w-7xl mx-auto flex justify-between items-center'>
        <a href="/" className='text-lg font-bold text-white'>Location<span className='text-orange-400'>Bluster</span></a>
        <div className='md:hidden'>
          <button onClick={toggoleMenu} className='text-white w-5 h-5 cursor-pointer '>
            <FaBars className='w-5 h-5' />
          </button>
        </div>
        
      </nav>
    </header>
  );
};

export default Nav;
