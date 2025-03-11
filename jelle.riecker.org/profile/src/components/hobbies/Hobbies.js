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
          <li><img src="assets/motorcycling/duc-ring.jpg" alt="With my duc to the Nurburgring" /></li>
          <li><img src="assets/motorcycling/sploosh.jpg" alt="riding the TET with my Triumph" /></li>
          <li><img src="assets/motorcycling/whoops.jpg" alt="first crash of the vacation" /></li>
          {/* Add more motorcycle images as needed */}
        </ul>
      </div>

      <div className="hobby-section" id="photography">
        <h3>Photography</h3>
        <ul>
          <li><img src="assets/photography/chonky_allan.jpg" alt="Chonky" /></li>
          <li><img src="assets/photography/lioness_01.jpg" alt="Lioness" /></li>
          <li><img src="assets/photography/giraffe.jpg" alt="Giraffe" /></li>
          <li><img src="assets/photography/moto3-ktm.jpg" alt="moto3" /></li>
          <li><img src="assets/photography/rossi.jpg" alt="rossi" /></li>
          <li><img src="assets/photography/vroom.jpg" alt="vroom" /></li>
          {/* Add more photography images as needed */}
        </ul>
      </div>

      <div className="hobby-section" id="Gaming">
        <h3>Gaming</h3>
        <p>These are some of my favorite games</p>
        <ul>
          <li><img src="assets/gaming/eldenring.jpg" alt="eldenring" /></li>
          <li><img src="assets/gaming/ds3.jpg" alt="Dark Souls 3" /></li>
          <li><img src="assets/gaming/stalker2.jpg" alt="Stalker 2" /></li>
          <li><img src="assets/gaming/cities-skylines.jpg" alt="Cities: Skylines" /></li>
          <li><img src="assets/gaming/borderlands.jpg" alt="Borderlands franchise" /></li>
          <li><img src="assets/gaming/stardew.jpg" alt="Stardew Valley" /></li>
        </ul>
      </div>

      <div className="hobby-section" id="DIY">
        <h3>DIY</h3>
        <ul>
          <li>fixing, maintaining and upgrading my own vehicles and home</li>
          <li></li>
          <li>helping friends and family with the same stuff</li>
        </ul>
      </div>
    </section>
  );
};
export default Hobbies;