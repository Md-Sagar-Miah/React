import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <NavLink className='nav-link' to="/">Home</NavLink>
      <NavLink className='nav-link' to="/blogs">Blogs</NavLink>
      <NavLink className='nav-link' to="/about">About Us</NavLink>
      <NavLink className='nav-link' to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Nav;
