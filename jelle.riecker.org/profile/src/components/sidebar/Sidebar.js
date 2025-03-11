// profiel.riecker.org/profile/src/components/sidebar/Sidebar.js

import React from 'react';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="#about" className="active">About</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;