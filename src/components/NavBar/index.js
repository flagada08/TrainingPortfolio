// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './navbar.scss';

// == Composant
const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          to="/aboutme"
          activeClassName="active-navbar"
          exact
        >
          <h2>AboutMe</h2>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="projects"
          activeClassName="active-navbar"
          exact
        >
          <h2>Projects</h2>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact"
          activeClassName="active-navbar"
          exact
        >
          <h2>Contact</h2>
        </NavLink>
      </li>
    </ul>
  </nav>
);

// == Export
export default NavBar;
