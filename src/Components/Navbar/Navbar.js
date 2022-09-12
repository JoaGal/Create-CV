import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import "./Navbar.css";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-height">
      <div className="nav">
        <NavLink className="nav-logo-link" to="/">
          <img
            className="nav-logo-img"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Netflix Logo"
            onClick={() => setShowNav(false)}
          />
        </NavLink>

        <div
          className="mobile-menu-icon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
        >
          <MdMenu size={48} fill="white" />
        </div>
        <ul className={!showNav ? "navItems hide-item" : "navItems"}>
          <li className="nav-li">
            <NavLink
              className="nav-link"
              to="/"
              onClick={() => setShowNav(false)}
              role="button"
              onKeyDown={() => setShowNav(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              className="nav-link"
              to="/template"
              onClick={() => setShowNav(false)}
              role="button"
              onKeyDown={() => setShowNav(false)}
            >
              Template
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              className="nav-link"
              to="/contact"
              onClick={() => setShowNav(false)}
              role="button"
              onKeyDown={() => setShowNav(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
