// src/components/skills/Skills.js
import React from 'react';
import './Skills.css';

const Skills = ({ id }) => {
  return (
    <section id={id} className="Skills">
      <h1 class="text-2xl font-semibold">Skills</h1>
        
        {/* <!-- Software Development --> */}
        <div class="Development">
            <h3 class="text-xl font-semibold">Software Development</h3>
            <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>FastAPI</li>
                <li>Tailwind CSS</li>
                <li>React</li>
            </ul>
        </div>

        {/* <!-- DevOps --> */}
        <div class="DevOps">
            <h3 class="text-xl font-semibold">DevOps</h3>
            <ul>
                <li>Docker</li>
                <li>Ansible</li>
                <li>Git</li>
                <li>Open-tofu</li>
                <li>Kubernetes</li>
            </ul>
        </div>

        {/* <!-- Cyber Security --> */}
        <div class="CyberSec">
            <h3 class="text-xl font-semibold">Cyber Security</h3>
            <ul>
                <li>Cybersecurity Fundamentals</li>
                <li>Network Security</li>
                <li>Vulnerability Assessment</li>
            </ul>
        </div>

        {/* <!-- Windows/Linux Administration --> */}
        <div class="Sysadmin">
            <h3 class="text-xl font-semibold">Windows/Linux Administration</h3>
            <ul>
                <li>Windows Server Management</li>
                <li>Linux System Administration</li>
                <li>Network Configuration</li>
            </ul>
        </div>
    </section>
  );
};

export default Skills;