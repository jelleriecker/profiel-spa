// profiel.riecker.org/profile/src/components/header/Header.js

import React from 'react';
import './Header.css'; // Import the component-specific CSS file

const Header = () => {
  return (
    <header className="Header">
      <h2>Jelle Riecker</h2>
      <p className="bio-intro">Welcome to my profile! Here you will find information about me, my projects, and interests.</p>
    </header>
  );
};

export default Header;