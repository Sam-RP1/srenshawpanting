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
* Footer - Class for the footer component.
*/
class Footer extends Component {
  render() {
    return (
      <div className="footer-container container">
      <FooterLinks />
      <FooterIcons />
      </div>
    )
  }
}

/**
* FooterLinks - Contains the footer links component for the Footer component.
*/
class FooterLinks extends Component {
  render() {
    return (
      <ul className="footer-link-container">
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
    );
  }
};

/**
* FooterIcons - Contains the footer icons component for the Footer component.
*/
class FooterIcons extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="footer-icon-container">
      <a href="https://www.youtube.com/channel/UCDDIlIQ1pU7TAl0bjth6G2Q" target="_blank">
      <img src={youtubeIcon} alt="SRP Designs YouTube"></img>
      </a>
      <a href="https://www.instagram.com/_srpdesigns/" target="_blank">
      <img src={instagramIcon} alt="SRP Designs Instagram"></img>
      </a>
      <a href="https://www.linkedin.com/in/samuel-renshaw-panting/" target="_blank">
      <img src={linkedinIcon} alt="Samuel Renshaw Panting Linkedin"></img>
      </a>
      <a className="footer-icon-l" href="https://github.com/Sam-RP1?tab=repositories" target="_blank">
      <img src={githubIcon} alt="Samuel Renshaw Panting GitHub"></img>
      </a>
      </div>
      <p className="footer-icon-text">Stay Connected</p>
      </React.Fragment>
    );
  }
};

export default Footer;
