import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import cvLogo from "./cv-logo.svg";
import "./Navbar.css";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-height">
      <div className="nav">
        <NavLink className="nav-logo-link" to="/">
          <img className="nav-logo-img" src={cvLogo} alt="CV Logo" onClick={() => setShowNav(false)} />
        </NavLink>

        <div className="mobile-menu-icon" onClick={() => setShowNav(!showNav)} role="button">
          {showNav ? <MdMenuOpen size={48} fill="white" /> : <MdMenu size={48} fill="white" />}
        </div>
        <ul className={!showNav ? "navItems hide-item" : "navItems"}>
          <li className="nav-li">
            <NavLink className="nav-link" to="/" onClick={() => setShowNav(false)} role="button">
              Home
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink className="nav-link" to="/templates" onClick={() => setShowNav(false)} role="button">
              Templates
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink className="nav-link" to="/contact" onClick={() => setShowNav(false)} role="button">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
