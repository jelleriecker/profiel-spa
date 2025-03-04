// src/components/hobbies/Hobbies.js
import React from 'react';
import './Hobbies.css';

const Hobbies = ({ id }) => {
  return (
    <section id={id} className="Hobbies">
      <h2>My hobbies</h2>
      <ul>
        <li>Motorcycling</li>
        <li>Gaming</li>
        <li>Photography</li>
        <li>DIY</li>
        <li>test</li>
      </ul>
    </section>
  );
};

export default Hobbies;