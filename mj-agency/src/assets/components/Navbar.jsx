import React from 'react';
import { Link } from 'react-router-dom';
import logomjagency from '../logomjagency-yellow.png';

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="py-3">
        <div className="d-flex align-items-end justify-content-between">
          <div>
            <img src={logomjagency} alt="Logo MJ Agency" style={{ width: '150px', height: 'auto' }} />
          </div>
          <div className="d-flex align-items-end">
            <Link to="/" className="mx-2 text-md text-semibold">
              Home
            </Link>
            <Link to="/about" className="mx-2 text-md text-semibold">
              About
            </Link>
            <Link to="/works" className="mx-2 text-md text-semibold">
              Works
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}