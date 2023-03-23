// == Import npm
import React from 'react';
import imageProject1 from '../../img/project1.png';
import imageProject2 from '../../img/project2.png';

// == Import
import Header from '../Header';
import NavBar from '../NavBar';
import Footer from '../Footer';
import './projects.scss';

// == Composant
const Projects = () => (
  <div className="projects">
    <Header />
    <NavBar />
    <div className="container">
      <h3 className="projects-title">reactLogin project</h3>
      <a href="https://flagada08.github.io/react-app/" target="_blank" rel="noreferrer">
        <img src={imageProject1} alt="img project login react" className="projects-resume" />
      </a>
      <h3 className="projects-title">agenceDemo project</h3>
      <a href="https://agence-demo.000webhostapp.com/index.html" target="_blank" rel="noreferrer">
        <img src={imageProject2} alt="img project login react" className="projects-resume" />
      </a>
    </div>
    <Footer />
  </div>
);

// == Export
export default Projects;
