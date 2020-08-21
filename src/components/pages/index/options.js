'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../../styles/root.scss';
import '../../../styles/options.scss';

import portfolioIcon from '../../../assets/icons/portfolio.png';
import servicesIcon from '../../../assets/icons/services.png';
import contactIcon from '../../../assets/icons/contact.png';

/**
* Options() - Contains the HTML content for the Options component on the index page.
* @return returns the HTML content for the Options component
*/
function Options(props) {
  return (
    <div className="options-container container ">
    <div id="portfolio" className="grid-square" data-aos="fade-up">
    <a href="portfolio.html">
    <img src={portfolioIcon} alt="Portfolio"></img>
    <h2>Portfolio</h2>
    </a>
    </div>
    <div id="services" className="grid-square" data-aos="fade-up" data-aos-delay="100">
    <a href="placeholder.html">
    <img src={servicesIcon} alt="Services"></img>
    <h2>Services</h2>
    </a>
    </div>
    <div id="contact" className="grid-square" data-aos="fade-up" data-aos-delay="200">
    <a href="contact.html">
    <img src={contactIcon} alt="Contact"></img>
    <h2>Contact</h2>
    </a>
    </div>
    </div>
  );
};

export default Options;
