// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import NavBar from '../NavBar';
import Footer from '../Footer';
import './aboutme.scss';

// == Composant
const AboutMe = () => (
  <div className="about-me">
    <Header />
    <NavBar />
    <div className="container">
      <h3 className="about-me-title">AboutMe</h3>
      <p className="about-me-resume">
        Terence Persin
        <br />
        Web Developer
        <br />
        Coding in MEUSE (55)
        <br />
        Recently graduated in web development BTS/DUT (BAC+2)
      </p>
    </div>
    <Footer />
  </div>
);

// == Export
export default AboutMe;
