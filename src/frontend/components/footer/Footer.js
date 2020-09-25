'use strict';

import React from 'react';

import '../../styles/root.scss';
import './Footer.scss';

import Links from './Links';
import Icons from './Icons';

/**
* Footer - The footer component.
*/
const Footer = () => {
  const links = [
    { href: "index.html#about", title: "About" },
    { href: "portfolio.html", title: "Portfolio" },
    { href: "services.html", title: "Services" },
    { href: "contact.html", title: "Contact" }
  ];
  const icons = [
    { href: "https://www.youtube.com/channel/UCDDIlIQ1pU7TAl0bjth6G2Q", src: <i class="fab fa-youtube"></i>, alt: "SRP Designs YouTube" },
    { href: "https://www.instagram.com/_srpdesigns/", src: <i class="fab fa-instagram"></i>, alt: "SRP Designs Instagram" },
    { href: "https://www.linkedin.com/in/samuel-renshaw-panting/", src: <i class="fab fa-linkedin-in"></i>, alt: "Samuel Renshaw Panting Linkedin" },
    { href: "https://github.com/Sam-RP1?tab=repositories", src: <i class="fab fa-github"></i>, alt: "Samuel Renshaw Panting GitHub" }
  ];

  return (
    <div className="footer-content container">
    <Links links={links} />
    <Icons icons={icons} />
    <p className="footer-label">Stay Connected</p>
    </div>
  )
}

export default Footer;
