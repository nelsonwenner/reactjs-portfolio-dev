import React from 'react';
import './form-contact.css';

const FormContact = () => {
  return (
    <div className="row">
      <form className="contact-form">
        <div className="row">
          <div className="form-item col-6 padd-15">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name*" />
            </div>
          </div>
          <div className="form-item col-6 padd-15">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Email*" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-item col-12 padd-15">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Subject*" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-item col-12 padd-15">
            <div className="form-group">
              <textarea className="form-control" placeholder="Your message..."></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 padd-15">
            <button className="btn-about" type="submit">Send Message</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormContact;