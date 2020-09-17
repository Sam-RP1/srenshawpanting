'use strict';

import React from 'react';
import {hot} from 'react-hot-loader';

import './Form.scss';

/**
* ContactForm - Contains the form content for the Contact component.
*/
const Form = () => {
  return (
    <form id="contactForm" name="contactForm" action="php/Contact.php" method="POST">
    <input type="text" name="name" placeholder="Name" maxLength="35" required className="txt-input" data-aos="fade-up" data-aos-delay="50"></input>
    <input type="text" name="email" placeholder="Email" maxLength="45" required className="txt-input" data-aos="fade-up" data-aos-delay="100"></input>
    <input type="text" name="subject" placeholder="Subject" maxLength="30" required className="txt-input" data-aos="fade-up" data-aos-delay="150"></input>
    <select id="services" name="services" className="txt-input drop-down" data-aos="fade-up" data-aos-delay="200">
    <option value="None">No Service</option>
    <option value="Logo Design">Logo Design</option>
    <option value="Website Design">Website Design</option>
    <option value="Website Development">Website Development</option>
    <option value="Website Hosting">Website Hosting</option>
    <option value="Website Design & Development">Website Design & Development</option>
    <option value="Website Design & Development & Hosting">Website Design & Development & Hosting</option>
    </select>
    <textarea name="message" placeholder="..." rows="10" cols="25" maxLength="750" required data-aos="fade-up" data-aos-delay="250"></textarea>
    <input id="submitButton" type="submit" value="Submit" className="form-btn" data-aos="fade-up" data-aos-delay="300"></input>
    <input type="reset" value="Reset" className="form-btn" data-aos="fade-up" data-aos-delay="350"></input>
    </form>
  )
}

export default Form;
