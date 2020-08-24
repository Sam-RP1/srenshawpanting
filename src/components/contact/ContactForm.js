'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';

/**
* ContactForm - Contains the Form component for the Contact component.
*/
class ContactForm extends Component {
  render() {
    return (
      <form id="contactForm" name="contactForm" action="php/Contact.php" method="POST">
      <input type="text" name="name" placeholder="Name" maxLength="35" required className="txt-input" data-aos="fade-up" data-aos-delay="50"></input>
      <input type="text" name="email" placeholder="Email" maxLength="45" required className="txt-input" data-aos="fade-up" data-aos-delay="100"></input>
      <input type="text" name="subject" placeholder="Subject" maxLength="30" required className="txt-input" data-aos="fade-up" data-aos-delay="150"></input>
      <textarea name="message" placeholder="..." rows="10" cols="25" maxLength="500" required data-aos="fade-up" data-aos-delay="200"></textarea>
      <input id="submitButton" type="submit" value="Submit" className="form-btn" data-aos="fade-up" data-aos-delay="250"></input>
      <input type="reset" value="Reset" className="form-btn" data-aos="fade-up" data-aos-delay="300"></input>
      </form>
    )
  }
}

export default ContactForm;
