// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import NavBar from '../NavBar';
import Footer from '../Footer';
import './contact.scss';

// == Composant
const Contact = () => (
  <div className="contact">
    <Header />
    <NavBar />
    <div className="container">
      <h3 className="contact-title">Contact</h3>
      <p className="contact-resume">
        Terence Persin
        <br />
        flagada08@gmail.com
      </p>
    </div>
    <Footer />
  </div>
);

// == Export
export default Contact;
