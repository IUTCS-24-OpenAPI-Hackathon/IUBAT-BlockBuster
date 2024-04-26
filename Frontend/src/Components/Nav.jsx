import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaAngleUp, FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";




const Nav = () => {
  const [ismenuOpen, setismenu] = useState(false);

  const toggoleMenu = () => {

    setismenu(!ismenuOpen);

  }
  //navitems
  const Navitems = [
    { path: "/", link: "Home" },
    { path: "/About", link: "About" },
    { path: "/Blogs", link: "Blogs" },
    { path: "/Contact", link: "Contact Us" }
  ]
  return (
    <header className='bg-black fixed top-0 right-0 left-0'>
      <nav className='px-5 py-5 max-w-7xl mx-auto flex justify-between'>
        <a href="" className='text-lg font-bold text-white'>Location<span className='text-orange-400'>Bluster</span></a>
        <ul className='md:flex gap-12 text-lg hidden'>
          {Navitems.map((item, index) => (
            <li key={index}>
              <NavLink className="text-white" to={item.path} activeClassName="active">
                {item.link}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* menu icons */}

        <div className='text-white md:flex gap-4 items-center hidden'>
          <a href="/" className='hover:text-orange-400'><FaFacebook></FaFacebook></a>
          <a href="/" className='hover:text-orange-400'><FaDribbble></FaDribbble></a>
          <a href="/" className='hover:text-orange-400'><FaTwitter></FaTwitter></a>
          <button className='bg-slate-400 px-5 py-2 rounded text-white font-bold hover:text-black hover:bg-slate-100 transition-all duration-200 ease-in'>Log in</button>
        </div>
        <div className='md:hidden'>
          <button onClick={toggoleMenu} className='text-white w-5 h-5 cursor-pointer '>
            {
              ismenuOpen ? <FaAngleUp className='w-5 h-5'></FaAngleUp> : <FaBars className='w-5 h-5'></FaBars>
            }
          </button>

        </div>
      </nav>
      {/* menu items only for mobile */}
      <div className='mt-10'>
        <ul className={`md:hidden gap-12 text-lg space-y-4 block px-7   ${ismenuOpen ? "fixed  transition-all duration-500 bg-slate-300" : "hidden"}`}>
          {Navitems.map((item, index) => (
            <li key={index}>
              <NavLink className="text-black" to={item.path} activeClassName="active">
                {item.link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

    </header>
  );
};

export default Nav;