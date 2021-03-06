'use strict';

import React from 'react';

// Styles
import '../../styles/root.scss';
import './Portfolio.scss';

// Components
// Lazy load in repos?
import Section from '../ui/Section';
import Repositories from './Repositories';

// Other / Assets
import { portfolioData } from './Portfolio-data.js';

/**
 * Portfolio - Renders portfolio items on the portfolio page.
 */
const Portfolio = React.memo(() => {
    const aos = [
        'fade-right',
        'fade-up',
        'fade-left',
        'fade-down',
        'fade-right',
        'fade-left',
        'fade-up',
        'fade-left',
        'fade-down',
        'fade-right',
    ];

    const handleTabClick = (id) => {
        const elem = document.getElementById(id);
        elem.parentNode.classList.toggle('active');
    };

    return (
        <>
            <Section class={'bg-black content-white'}>
                <h1 data-aos='flip-down'>Portfolio</h1>
                <div className='portfolio-gallery-container'>
                    {portfolioData.map((item, i) => (
                        <div key={i} className='gallery-item-container' data-aos={aos[i % 11]}>
                            <div id={item.id} className='gallery-item-inner'>
                                <section className='gallery-item-front'>
                                    <div className='gallery-item-picture-container'>
                                        <a
                                            href={item.url}
                                            target={item.url.substr(0, 5) === '/port' ? '' : '_blank'}
                                        ></a>
                                    </div>
                                    <div className='gallery-front-tab' onClick={() => handleTabClick(item.id)}>
                                        <span></span>
                                        <h2>{item.title}</h2>
                                    </div>
                                </section>
                                <section className='gallery-item-back'>
                                    <article className='gallery-item-info'>
                                        <h2>{item.title}</h2>
                                        <h3>{item.purpose}</h3>
                                        <p>{item.description}</p>
                                    </article>
                                    <div className='gallery-back-tab'>
                                        <div className='gallery-item-btn' onClick={() => handleTabClick(item.id)}>
                                            &#10006; Close
                                        </div>
                                        <a
                                            className='gallery-item-btn'
                                            href={item.url}
                                            target={item.url.substr(0, 5) === '/port' ? '' : '_blank'}
                                        >
                                            {item.button} &#8618;
                                        </a>
                                    </div>
                                </section>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
            <Section class={'bg-white content-black overflow-hidden'}>
                <h1 data-aos='flip-down'>Repositories</h1>
                <Repositories />
            </Section>
        </>
    );
});

export default Portfolio;
