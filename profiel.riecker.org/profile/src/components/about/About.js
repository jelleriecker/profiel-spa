// profiel.riecker.org/profile/src/About.js

import React from 'react';
import './About.css';

const downloadCv = () => {
  const link = document.createElement('a');
  link.href = '/assets/jelle-cv.pdf'; // Update this path with the actual URL of your CV
  link.download = 'jelle-cv.pdf';
  link.click();
};

const About = () => {
  return (
    <div className="App">
      <header className="About">
        <h2>About</h2>
        <img
          className="profile-photo"
          src="assets/scaled-mugshot.jpg"
          alt="Jelle Riecker"
        />
        <p className="bio"> I am an enthusiastic open-source advocate with a strong background in system administration, starting my career as a Windows System Administrator. Over the years, I developed a keen interest in Linux and began exploring DevOps practices, leveraging open-source tools and communities.
        <br></br>
        <br></br>

        Driven by a passion for cybersecurity, I transitioned my expertise to this dynamic field. I am committed to continuously learning and staying updated on the latest security trends and technologies. My journey has been marked by contributions to open-source projects, where I have honed skills in software development, automation, and collaborative environments.
        <br></br>
        <br></br>
          
        Currently, I am actively involved in several cybersecurity initiatives, aiming to enhance both my professional knowledge and contribute meaningfully to the community. With a strong foundation in system administration and a growing skill set in DevOps and cybersecurity, I am dedicated to building a successful career in this vital area.
        <br></br>
        <br></br>
        
        </p>
        <button onClick={downloadCv} className="App-link">Download CV</button>
      </header>
    </div>
  );
};

export default About;