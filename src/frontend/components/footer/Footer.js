'use strict';

import React from 'react';

import '../../styles/root.scss';
import './Footer.scss';

import Links from './Links';
import Icons from './Icons';

import youtubeIcon from '../../assets/icons/youtube.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import instagramIcon from '../../assets/icons/instagram.png';
import githubIcon from '../../assets/icons/github.png';

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
    { href: "https://www.youtube.com/channel/UCDDIlIQ1pU7TAl0bjth6G2Q", src: youtubeIcon, alt: "SRP Designs YouTube" },
    { href: "https://www.instagram.com/_srpdesigns/", src: instagramIcon, alt: "SRP Designs Instagram" },
    { href: "https://www.linkedin.com/in/samuel-renshaw-panting/", src: linkedinIcon, alt: "Samuel Renshaw Panting Linkedin" },
    { href: "https://github.com/Sam-RP1?tab=repositories", src: githubIcon, alt: "Samuel Renshaw Panting GitHub" }
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
