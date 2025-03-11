import React from 'react';
import About from '../about/About';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import Hobbies from '../hobbies/Hobbies';
import Contact from '../contact/Contact';

const MainContent = () => {
  return (
    <div className="MainContent">
      {/* About section */}
      <About id="about" className="section" />

      {/* Projects section */}
      <Projects id="projects" className="section" />

      {/* Skills section */}
      <Skills id="skills" className="section" />

      {/* Hobbies section */}
      <Hobbies id="hobbies" className="section" />

      {/* Contact section */}
      <Contact id="contact" className="section" />
    </div>
  );
};

export default MainContent;