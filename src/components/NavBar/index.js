// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './navbar.scss';

// == Composant
const NavBar = () => (
  <nav className="navbar">
    <ul className="navbar-ul">
      <li className="navbar-li">
        <NavLink
          to="/aboutme"
          activeClassName="active-navbar"
          exact
        >
          <h2 className="h2-navbar">AboutMe</h2>
        </NavLink>
      </li>
      <li className="navbar-li">
        <NavLink
          to="projects"
          activeClassName="active-navbar"
          exact
        >
          <h2 className="h2-navbar">Projects</h2>
        </NavLink>
      </li>
      <li className="navbar-li">
        <NavLink
          to="contact"
          activeClassName="active-navbar"
          exact
        >
          <h2 className="h2-navbar">Contact</h2>
        </NavLink>
      </li>
    </ul>
  </nav>
);

// == Export
export default NavBar;
