import React, { useState } from 'react';
import Nav from './Nav';
import logo from '../assets/images/logo.png'; // Path from Header.js to logo.png
import './style/Header.css'; // Import the CSS file

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-title">
        <img src={logo} alt="Vegan" className="logo" />
      </div>
      <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <Nav />
      </nav>
      <button className="menu-toggle" onClick={handleMenuToggle}>
        {/* Hamburger icon */}
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>
    </header>
  );
}

export default Header;