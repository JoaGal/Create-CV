import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import './Navbar.css'

export const Navbar = () => {
 
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav'>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <li className='nav-li'>
          <NavLink
            to="/"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
          >
            Home
          </NavLink>
        </li>
        <li className='nav-li'>
          <NavLink
            to="/template"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
          >
            Template
          </NavLink>
        </li>
        <li className='nav-li'>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}