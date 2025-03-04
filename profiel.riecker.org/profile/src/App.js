// profiel.riecker.org/profile/src/App.js

import React, { useEffect } from 'react';
// import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Hobbies from './components/hobbies/Hobbies';
import Contact from './components/contact/Contact';

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const links = document.querySelectorAll('.sidebar a');

      sections.forEach(section => {
        const sectionTop = window.scrollY;
        const sectionHeight = section.offsetHeight;
        if (sectionTop >= section.offsetTop - 100 && sectionTop < section.offsetTop + sectionHeight) {
          // Find the corresponding link and add 'active' class
          links.forEach(link => {
            if (link.getAttribute('href') === `#${section.id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Sidebar component */}
      <Sidebar />

      {/* Header section */}
      <Header />

      {/* About section */}
      <About id="about" className="section" />

      {/* Hobbies section */}
      <Hobbies id="hobbies" className="section" />

      {/* Projects section */}
      <Projects id="projects" className="section" />

      {/* Skills section */}
      <Skills id="skills" className="section" />

      {/* Contact section */}
      <Contact id="contact" className="section" />
    </div>
  );
};

export default App;