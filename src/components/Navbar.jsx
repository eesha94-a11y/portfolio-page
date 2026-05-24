import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Brand Logo / Text */}
      <NavLink to="/" className="nav-logo">
        Eesha<span>.dev</span>
      </NavLink>
      
      {/* Navigation Links Grid */}
      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>
            Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/weather" className={({ isActive }) => isActive ? 'active' : ''}>
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;