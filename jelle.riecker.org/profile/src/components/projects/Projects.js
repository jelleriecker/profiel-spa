// profiel.riecker.org/profile/src/components/projects/Projects.js

import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    { title: 'migration to k8s', 
      description: `Migrating my promxox vm services to my K8s cluster so i can replicate and rebuild faster if nesseccery. 
      
      Why? Scalability: Kubernetes allows for seamless scaling of workloads up or down based on demand, making it ideal for environments with fluctuating traffic patterns. 
      
      Resource Efficiency: Containers are lightweight and share the operating system kernel, which reduces overhead compared to VMs, leading to better resource utilization. 
      
      Operational Agility: Kubernetes simplifies deployment, maintenance, and scaling of applications, enabling faster development cycles and easier rollback in case of failures, or changes in my hardware` 
    },
    
    { title: 'Monitoring', 
    description: `Building a central monitoring platform where I can monitor my proxmox, services, security, homeassistant etc.
                     
    Why? Monitoring is essential for maintaining the health and performance of my homelab. It provides real-time insights into system performance, helps in identifying issues before they escalate, and ensures that all components are running smoothly. Additionally, it aids in proactive maintenance and enhances overall reliability.`  
    },
    
    { title: 'Homelab Hardening', 
    description: `CyberSec: Ongoing process of hardening my security posture 
    
    Why? Protecting my homelab from potential security threats is crucial. Hardening involves implementing robust security measures such as firewalls, encryption, regular updates, and secure configurations to ensure that my systems are resilient against attacks. This not only safeguards my data but also enhances the trustworthiness of my infrastructure.` 
    },
    
    { title: 'personal/portfolio website', 
      description: "WebDev: Ongoing process of learning new tools and skills to build and create stuff, like this website. I was comletely new to JavaScript and chose this just for the challenge. As you can see, I'm not exactly a seasoned webdesigner, but we all have to start somewhere =) " },
    // { title: 'placeholder', description: 'placeholder' },
    // { title: 'placeholder', description: 'placeholder' },
    
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