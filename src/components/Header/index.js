// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './header.scss';

// == Composant
const Header = () => (
  <div className="header">
    <NavLink to="/">
      <h1 className="header-title">TrainingPortfolio
        <span className="header-dash" />
      </h1>
    </NavLink>
  </div>
);

// == Export
export default Header;
