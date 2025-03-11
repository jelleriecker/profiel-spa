import React, { } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills'
import Hobbies from './components/hobbies/Hobbies';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Hobbies />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;