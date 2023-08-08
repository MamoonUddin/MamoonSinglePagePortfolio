import React from 'react';
import WebsiteLogos from '../WebsiteLogos/WebsiteLogos';
import ContactForm from "../../component/ContactForm/ContactForm";
import "./Footer.css";
import {FaMapMarker , FaPhone , FaEnvelope} from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
      
      <div>
        <h1 className='section-header' id='contact'>Get in Touch</h1>
      </div>
      <div className="contact-wrapper">
        <ContactForm />
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item"> <FaMapMarker /> <span className="contact-text place">Katy, Texas</span></li>
            <li className="list-item"><FaPhone/><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(832) 745-0685</a></span></li>
            <li className="list-item"><FaEnvelope/> <span className="contact-text gmail"><a href="mailto:#" title="Send me an email">mamoonuddin17@gmail.com</a></span></li>
          </ul>
          <hr></hr>
          <WebsiteLogos
            github="https://github.com/MamoonUddin"
            linkedIn="https://www.linkedin.com/in/mamoon-uddin/"
            gmail="mamoonuddin17@gmail.com"
            medium="https://medium.com/@mamoonuddin17"
          />
          <hr></hr>
          <div className='copyright'>
            © {new Date().getFullYear()}. All rights reserved by Mamoon Uddin
          </div>
        </div>
      </div>
    </div>
  );
}
