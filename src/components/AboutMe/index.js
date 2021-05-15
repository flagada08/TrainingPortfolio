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
    <h3 className="about-me-title">About Me</h3>
    <p className="about-me-resume">
      Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Sit illo ducimus officiis rerum animi fugiat
      dicta alias error veritatis, vel sint, id ab et ex
      omnis ratione obcaecati sunt asperiores laudantium
      quibusdam dolor.
    </p>
    <Footer />
  </div>
);

// == Export
export default AboutMe;
