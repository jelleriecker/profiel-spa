// src/components/skills/Skills.js
import React from 'react';
import './Skills.css';

const Skills = ({ id }) => {
  return (
    <section id={id} className="Skills">
      <h2>My Skills</h2>
      <ul>
        <li>Skill 1 - Description</li>
        <li>Skill 2 - Description</li>
      </ul>
    </section>
  );
};

export default Skills;