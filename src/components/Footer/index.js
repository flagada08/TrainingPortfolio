// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

// == Import
import './footer.scss';

// == Composant
const Footer = () => (
  <div className="footer">
    <NavLink exact to="/">
      <h1 className="footer-title">
        TerenceWorldfolio
      </h1>
    </NavLink>
    <ul className="social-footer">
      <li className="footer-li">
        <SocialIcon url="https://github.com/flagada08" target="_blank" />
      </li>
      <li className="footer-li">
        <SocialIcon url="https://www.linkedin.com/in/terence-persin" target="_blank" />
      </li>
      <li className="footer-li">
        <SocialIcon url="https://twitter.com/flagadatweet" target="_blank" />
      </li>
      <li className="footer-li">
        <SocialIcon url="https://gitconnected.com/flagada08" target="_blank" />
      </li>
    </ul>
  </div>
);

// == Export
export default Footer;
