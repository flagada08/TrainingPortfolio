// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import NavBar from '../NavBar';
import Footer from '../Footer';
import './homepage.scss';

// == Composant
const HomePage = () => (
  <div className="home-page">
    <Header />
    <NavBar />
    <div className="container">
      <h3 className="home-page-title">
        Welcome in my Worldfolio
      </h3>
      <p className="home-page-resume">
        Terence Persin Web Developer JS/PHP
      </p>
    </div>
    <Footer />
  </div>
);

// == Export
export default HomePage;
