// src/components/contact/Contact.js
import React from 'react';
import './Contact.css';

const Contact = ({ id }) => {
  return (
    <section id={id} className="Contact">
      <h2>Contact Me</h2>
      <p>Email: recruitment-contact.directed192@passfwd.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/jelle-riecker">Jelle Riecker</a></p>
    </section>
  );
};

export default Contact;