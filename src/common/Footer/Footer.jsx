import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='wrapper'>
        <div className="footer-column">
          <img src="logo.png" alt="Logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="footer-column"></div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Link 4</a></li>
            <li><a href="#">Link 5</a></li>
            <li><a href="#">Link 6</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
