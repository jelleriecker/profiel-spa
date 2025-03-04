// profiel.riecker.org/profile/src/App.js

import React, {useEffect} from 'react';
// import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Hobbies from './components/hobbies/Hobbies';
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <div className="App">
        {/* Header section */}
        <Header />

        {/* About section */}
        <About />

        {/* Hobbies section */}
        <Hobbies />

        {/* Projects section */}
        <Projects />

        {/* Skills section */}
        <Skills />

        {/* Contact section */}
        <Contact />
    </div>
  );
};

export default App;