// src/components/hobbies/Hobbies.js
import React from 'react';
import './Hobbies.css';


const Hobbies = ({ id }) => {
  return (
    <section id={id} className="Hobbies">
      <h1>My hobbies</h1>
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

      <div className="hobby-section" id="Gaming">
        <h3>Gaming</h3>
        <ul>
        </ul>
      </div>

      <div className="hobby-section" id="DIY">
        <h3>DIY</h3>
        <ul>
          
        </ul>
      </div>
    </section>
  );
};
export default Hobbies;