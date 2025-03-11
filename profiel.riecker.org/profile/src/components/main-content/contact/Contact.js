// src/components/contact/Contact.js
import React from 'react';
import './Contact.css';

const Contact = ({ id }) => {
  return (
    <section id={id} className="Contact">
      <h1>Contact Me</h1>
      <p>Email: contact@riecker.org</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/jelle-riecker">Jelle Riecker</a></p>
      <p>Github: <a href="https://github.com/jelleriecker">Jelle Riecker</a></p>

    </section>
  );
};

export default Contact;