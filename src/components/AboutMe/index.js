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
        High Level Technician BTS/DUT (BAC+2),
        <br />
        web and mobile web development
        <br />
        ⋅ 2020 to 2021
        <br />
        Web Development school
        <br />
        Linux, Git,
        <br />
        HTML, CSS, RWD,
        <br />
        SEO,
        <br />
        Bootstrap,
        <br />
        PHP, POO, Laravel, SQL,
        <br />
        MVC, Composer,
        <br />
        JS, SCSS, React,
        <br />
        ORM,
        <br />
        Framework, API, AJAX,
        <br />
        Adminsys, SSH, Deploy,
        <br />
        CMS, Wordpress
      </p>
    </div>
    <Footer />
  </div>
);

// == Export
export default AboutMe;
