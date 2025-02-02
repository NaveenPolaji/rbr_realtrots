import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>RBR_REALTROTS</h1>
      </div>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/contact">Contact</Link>
        <a href="https://www.instagram.com/rbr_realtors_official?igsh=MTR0ZHFwZnduZWp4bg==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="instagram-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;