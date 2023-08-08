import React from 'react';
import { Link } from 'react-router-dom';
import logomjagency from '../logomjagency-yellow.png';

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="py-3">
        <div className="navbar-container">
          <div className="logo-container">
            <img src={logomjagency} alt="Logo MJ Agency" style={{ width: '150px', height: 'auto' }} />
          </div>
          <div className="links-container">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/works" className="nav-link works-link">
              Works
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}