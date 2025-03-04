// src/components/projects/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="Projects">
      <h2>My Projects</h2>
      <ul>
        <li>K8s</li>
        <li>Monitoring</li>
        <li>Security</li>
        <li>WebDev</li>
      </ul>
    </div>
  );
};

export default Projects;