// src/components/contact/Contact.js
import React from 'react';
import './Contact.css';

const Contact = ({ id }) => {
  return (
    <section id={id} className="Contact">
      <h1>Contact Me</h1>
      <p>Email: recruitment-contact.directed192@passfwd.com</p>
      <p1>yes, the e-mail is correct i'm just using aliasses =) </p1>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/jelle-riecker">Jelle Riecker</a></p>
      <p>Github: <a href="https://github.com/jelleriecker">Jelle Riecker</a></p>

    </section>
  );
};

export default Contact;