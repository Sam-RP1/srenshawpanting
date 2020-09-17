'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import './Contact.scss';

import Form from './Form';

/**
* Contact - The Contact component.
*/
const Contact = () => {
  return (
    <section id="contact" className="section-default h-auto padding-6016">
    <article className="container contact-container">
    <h1 data-aos="flip-down">Contact</h1>
    <p data-aos="fade-up">For all general questions, queries or enquiries use the form below to get in touch. If you are getting in touch regarding a service or services then please be sure to select the appropriate option using the drop-down provided!</p>
    <p data-aos="fade-up" data-aos-delay="100" style={{marginTop: "30px"}}><b>Important!</b> Please be sure to check you have entered your email correctly before submitting. Otherwise, I will not be able to contact you back.</p>
    <Form />
    </article>
    </section>
  );
};

export default Contact;
