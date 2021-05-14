// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './header.scss';

// == Composant
const Header = () => (
  <NavLink to="/">
    <h1>TrainingPortfolio
      <span className="dash" />
    </h1>
  </NavLink>
);

// == Export
export default Header;
