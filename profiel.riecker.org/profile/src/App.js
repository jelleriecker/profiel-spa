import React, { useEffect } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import MainContent from './components/main-content/main-content/MainContent';
import Footer from './components/footer/Footer';

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

      {/* Main Content section */}
      <MainContent />

      {/* {Footer section} */}
      <Footer />
    </div>
  );
};

export default App;