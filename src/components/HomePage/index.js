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
    <h3 className="home-page-title">Terence Persin</h3>
    <p className="home-page-resume">
      Développeur Web
    </p>
    <Footer />
  </div>
);

// == Export
export default HomePage;
