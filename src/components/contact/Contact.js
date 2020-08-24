'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import './Contact.scss';

import ContactForm from './ContactForm.js';

/**
* Contact - Class for the Contact component.
*/
class Contact extends Component {
  render() {
    return (
      <article className="container contact-container">
      <h1 data-aos="flip-down">Contact</h1>
      <p data-aos="fade-up">For any questions, queries or enquiries use the form below to get in touch.</p>
      <ContactForm />
      </article>
    );
  }
};

export default Contact;
