// == Import npm
import React from 'react';

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
      <h3 className="projects-title">My Projects</h3>
      <p className="projects-resume">
        Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et
        quasi architecto beatae vitae dicta sunt explicabo. Nemo
        enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt.
      </p>
    </div>
    <Footer />
  </div>
);

// == Export
export default Projects;
