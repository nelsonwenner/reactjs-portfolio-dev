import React from 'react';
import './contact.css';

import FormContact from './FormContact/FormContact';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="row">
        <div className="contact-title">
          <h2>Contact</h2>
          <span></span>
        </div>
      </div>
      <div className="row">
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-icon">
              <i className="fa fa-phone"></i>
              <h4>Call Us On</h4>
              <p>+91 8800 000 000</p>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-icon">
              <i className="fa fa-map-marker"></i>
              <h4>Office</h4>
              <p>44 Street, New York</p>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-icon">
              <i className="fa fa-envelope"></i>
              <h4>Email</h4>
              <p>info@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <FormContact />
    </div>
  )
}

export default Contact;