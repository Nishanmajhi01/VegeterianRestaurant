import React from 'react';
import logo from '../assets/images/logo.png';
import './style/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" className="" />
      </div>
      <div className="footer-navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservation">Reservations</a></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <p>Address: 123 Vegan St, Sydney</p>
        <p>Phone Number: 123-456-7890</p>
        <p>Email: contact@veganrestro.com</p>
      </div>
      <div className="footer-social-media">
        <ul>
          <li><a href="#facebook">Facebook</a></li>
          <li><a href="#youtube">YouTube</a></li>
          <li><a href="#instagram">Instagram</a></li>
          <li><a href="#twitter">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;