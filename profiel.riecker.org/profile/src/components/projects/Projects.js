// src/components/projects/Projects.js
import React from 'react';
import './Projects.css';

const Projects = ({ id }) => {
  return (
    <section id={id} className="Projects">
      <h1>My Personal Projects</h1>
      <ul>
        <li>Migrating my promxox vm services to my K8s cluster so i can replicate and rebuild faster if nesseccery</li>
        <br></br>
        <li>Building a central monitoring platform where i can monitor my proxmox, services, security, homeassistant etc.</li>
        <br></br>
        <li>CyberSec: Ongoing process of hardening my skills, hardware and software </li>
        <br></br>
        <li>WebDev: Ongoing process of learning new tools and skills to build and create stuff, like this website. I was comletely new to JavaScript and chose this just for the challenge</li>
      </ul>
    </section>
  );
};

export default Projects;