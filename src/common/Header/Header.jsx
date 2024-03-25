//rafce
import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../logo.svg";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        {/* <img src="logo.svg" alt="Company Logo" className="logo" /> */}
        <img src={logo} alt="Company Logo" className="logo" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
