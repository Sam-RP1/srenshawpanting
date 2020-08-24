'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import './Footer.scss';

import FooterLinks from './FooterLinks.js';
import FooterIcons from './FooterIcons.js';

import youtubeIcon from '../../assets/icons/youtube.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import instagramIcon from '../../assets/icons/instagram.png';
import githubIcon from '../../assets/icons/github.png';

/**
* Footer - Class for the footer component.
*/
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { href: "index.html#about", title: "About" },
        { href: "portfolio.html", title: "Portfolio" },
        { href: "placeholder.html", title: "Services" },
        { href: "contact.html", title: "Contact" }
      ],
      icons: [
        { href: "https://www.youtube.com/channel/UCDDIlIQ1pU7TAl0bjth6G2Q", src: youtubeIcon, alt: "SRP Designs YouTube" },
        { href: "https://www.instagram.com/_srpdesigns/", src: instagramIcon, alt: "SRP Designs Instagram" },
        { href: "https://www.linkedin.com/in/samuel-renshaw-panting/", src: linkedinIcon, alt: "Samuel Renshaw Panting Linkedin" },
        { href: "https://github.com/Sam-RP1?tab=repositories", src: githubIcon, alt: "Samuel Renshaw Panting GitHub" }
      ]
    };
  }

  render() {
    return (
      <div className="footer-container container">
      <FooterLinks links={this.state.links} />
      <FooterIcons icons={this.state.icons} />
      </div>
    )
  }
}

export default Footer;
