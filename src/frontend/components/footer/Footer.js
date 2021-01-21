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
        { href: 'index.html#about', title: 'About' },
        { href: 'portfolio.html', title: 'Portfolio' },
        { href: 'contact.html', title: 'Contact' },
    ];
    const icons = [
        { href: 'https://www.youtube.com/channel/UCDDIlIQ1pU7TAl0bjth6G2Q', src: <i className='fab fa-youtube'></i> },
        { href: 'https://www.instagram.com/_srpdesigns/', src: <i className='fab fa-instagram'></i> },
        { href: 'https://www.linkedin.com/in/samuel-renshaw-panting/', src: <i className='fab fa-linkedin-in'></i> },
        { href: 'https://github.com/Sam-RP1?tab=repositories', src: <i className='fab fa-github'></i> },
    ];

    return (
        <div className='footer-content container'>
            <Links links={links} />
            <Icons icons={icons} />
            <p className='footer-label'>Stay Connected</p>
        </div>
    );
};

export default Footer;
