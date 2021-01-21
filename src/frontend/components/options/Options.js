'use strict';

import React from 'react';

// Components
import Grid from '../ui/Grid';

// Styles
import '../../styles/root.scss';
import './Options.scss';

// Other / Assets
import portfolioIcon from '../../assets/icons/portfolio-min.png';
import contactIcon from '../../assets/icons/contact-min.png';

/**
 * Options - The Options component.
 */
const Options = () => {
    const iconsData = [
        {
            id: 'portfolio',
            href: 'portfolio.html',
            src: portfolioIcon,
            alt: 'Portfolio button',
            title: 'Portfolio',
        },
        {
            id: 'contact',
            href: 'contact.html',
            src: contactIcon,
            alt: 'Contact button',
            title: 'Contact',
        },
    ];

    return (
        <section id='options' className='section-default h-auto padding-6016'>
            <Grid tiles={iconsData} divide={true} class={'space-around container'} />
        </section>
    );
};

export default Options;
