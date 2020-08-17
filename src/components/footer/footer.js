'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import '../../styles/footer.scss';

import youtubeIcon from '../../assets/icons/youtube.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import instagramIcon from '../../assets/icons/instagram.png';
import githubIcon from '../../assets/icons/github.png';

/**
* Footer() - Contains the HTML for the footer component.
* @return returns the HTML for the footer component
*/
function Footer(props) {
  return (
    <div className="footer-container container">
    <ul>
    <li>|</li>
    <li><a href="index.html#about">About</a></li>
    <li>|</li>
    <li><a href="portfolio.html">Portfolio</a></li>
    <li>|</li>
    <li><a href="placeholder.html">Services</a></li>
    <li>|</li>
    <li><a href="contact.html">Contact</a></li>
    <li>|</li>
    </ul>
    <div className="footer-icon-wrapper">
    <a href="https://www.youtube.com/channel/UCDDIlIQ1pU7TAl0bjth6G2Q" target="_blank">
    <img src={youtubeIcon} alt="SRP Designs YouTube"></img>
    </a>
    <a href="https://www.instagram.com/_srpdesigns/" target="_blank">
    <img src={instagramIcon} alt="SRP Designs Instagram"></img>
    </a>
    <a href="https://www.linkedin.com/in/samuel-renshaw-panting-99849b168/" target="_blank">
    <img src={linkedinIcon} alt="Samuel Renshaw Panting Linkedin"></img>
    </a>
    <a className="footer-icon-l" href="https://github.com/Sam-RP1?tab=repositories" target="_blank">
    <img src={githubIcon} alt="SRP Designs GitHub"></img>
    </a>
    </div>
    <p className="footer-icon-text">Stay Connected</p>
    </div>
  );
};

export default Footer;
