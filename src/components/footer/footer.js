'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import '../../styles/footer.scss';

import youtubeIcon from '../../assets/icons/youtube.png';
import twitterIcon from '../../assets/icons/twitter.png';
import instagramIcon from '../../assets/icons/instagram.png';
import githubIcon from '../../assets/icons/github.png';

/**
* Footer() - Contains the HTML for the footer component.
* @return returns the HTML for the footer component
*/
function Footer(props) {
  return (
    <div className="footer container">
    <ul>
    <li>|</li>
    <li><a href="index.html#about">About</a></li>
    <li>|</li>
    <li><a href="portfolio.html">Portfolio</a></li>
    <li>|</li>
    <li><a href="coming-soon.html">Services</a></li>
    <li>|</li>
    <li><a href="contact.html">Contact</a></li>
    <li>|</li>
    </ul>
    <div className="footer-icon-wrapper">
    <a href="https://www.youtube.com/channel/UCDDIlIQ1pU7TAl0bjth6G2Q" target="_blank">
    <img className="footer-icon" src={youtubeIcon} alt="SRP Designs YouTube"></img>
    </a>
    <a href="https://twitter.com/SRP_Designs" target="_blank">
    <img className="footer-icon" src={twitterIcon} alt="SRP Designs Twitter"></img>
    </a>
    <a href="https://www.instagram.com/_srpdesigns/" target="_blank">
    <img className="footer-icon" src={instagramIcon} alt="SRP Designs Instagram"></img>
    </a>
    <a className="footer-icon-l" href="https://github.com/Sam-RP1?tab=repositories" target="_blank">
    <img className="footer-icon" src={githubIcon} alt="SRP Designs GitHub"></img>
    </a>
    </div>
    <p className="footer-icon-text">Stay Connected</p>
    </div>
  );
};

export default Footer;
