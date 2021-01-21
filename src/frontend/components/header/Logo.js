'use strict';

import React from 'react';

// Styles
import './Logo.scss';

/**
 * Logo - Contains the Logo content for the Header component.
 */
const Logo = (props) => {
    return (
        <section id='logo-wrapper'>
            <a href='index.html'>
                <img id='header-logo-alt' src={props.logoAlt}></img>
                <img id='header-logo' src={props.logo}></img>
            </a>
        </section>
    );
};

export default Logo;
