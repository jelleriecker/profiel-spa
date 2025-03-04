// src/components/projects/Projects.js
import React from 'react';
import './Projects.css';

const Projects = ({ id }) => {
  return (
    <section id={id} className="Projects">
      <h2>My Projects</h2>
      <ul>
        <li>K8s</li>
        <li>Monitoring</li>
        <li>Security</li>
        <li>WebDev</li>
      </ul>
    </section>
  );
};

export default Projects;