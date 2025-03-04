// src/components/hobbies/Hobbies.js
import React from 'react';
import './Hobbies.css';


const Hobbies = ({ id }) => {
  return (
    <section id={id} className="Hobbies">
      <h2>My hobbies</h2>
      <div className="hobby-section" id="motorcycling">
        <h3>Motorcycling</h3>
        <ul>
          <li><img src="assets/motorcycling/duc-ring.jpg" alt="With the duc to the Nurburgring" /></li>
          <li><img src="assets/motorcycling/sploosh.jpg" alt="riding the TET with the Triumph" /></li>
          <li><img src="assets/motorcycling/whoops.jpg" alt="first crash of the vacation" /></li>
          {/* Add more motorcycle images as needed */}
        </ul>
      </div>

      <div className="hobby-section" id="photography">
        <h3>Photography</h3>
        <ul>
          <li><img src="assets/photography/chonky_allan.jpg" alt="Photo 1" /></li>
          <li><img src="assets/photography/lioness_01.jpg" alt="Photo 2" /></li>
          <li><img src="assets/photography/what.jpg" alt="Photo 3" /></li>
          {/* Add more photography images as needed */}
        </ul>
      </div>

      <ul>
        <li>Gaming</li>
        <li>DIY</li>
        <li>test</li>
      </ul>
    </section>
  );
};
export default Hobbies;