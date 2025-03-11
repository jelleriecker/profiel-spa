// profiel.riecker.org/profile/src/components/projects/Projects.js

import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    { title: 'Project k8s migration', description: 'Migrating my promxox vm services to my K8s cluster so i can replicate and rebuild faster if nesseccery' },
    { title: 'Project Monitoring', description: 'Building a central monitoring platform where i can monitor my proxmox, services, security, homeassistant etc.' },
    { title: 'Project Hardening', description: 'CyberSec: Ongoing process of hardening my skills, hardware and software ' },
    { title: 'Project Three', description: 'WebDev: Ongoing process of learning new tools and skills to build and create stuff, like this website. I was comletely new to JavaScript and chose this just for the challenge ' },
    { title: 'Project placeholder', description: 'placeholder' },
    { title: 'Project placeholder', description: 'placeholder' },
    
  ];

  return (
    <div className="Projects">
      <div className="project-section">
        <h2>My Projects</h2>
        <div className="project-container">
          {projectsData.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;