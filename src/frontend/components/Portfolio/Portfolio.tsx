import React, { useEffect } from 'react';
import { gsap } from 'gsap';

// Component Imports
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';

import { Icons } from '../../lib/interfaces';

// Styles
import './Portfolio.scss';

// Types
type PortfolioProps = {
    professionalItems: {
        id: string;
        title: string;
        created: string;
        tag: string;
        taster: string;
        description: string;
        techStack: string;
        buttons: Icons;
        img: string;
    }[];
    academicItems: {
        id: string;
        title: string;
        created: string;
        tag: string;
        taster: string;
        description?: string;
        techStack: string;
        buttons: Icons;
        img: string;
    }[];
};

/**
 * Exports Portfolio component
 * @returns JSX.Element
 */
export const Portfolio = ({ professionalItems, academicItems }: PortfolioProps): JSX.Element => {
    const proAspectRatios = ['ar-4', 'ar-1', 'ar-3', 'ar-1'];
    const acaAspectRatios = ['ar-4', 'ar-3', 'ar-4', 'ar-2'];

    const professional = professionalItems.map((item, i) => {
        return (
            <div key={item.id} id={item.id} className={'panel ' + 'panel--' + proAspectRatios[i]}>
                <div className='panel__image' style={{ backgroundImage: 'url(' + item.img + ')' }}></div>
                <div className='panel__content'>
                    <h2 className='panel__content__title'>{item.title}</h2>
                    <p className='panel__content__tag'>
                        <span>{item.tag}</span>
                    </p>
                    <p className='panel__content__taster'>
                        <span>{item.taster}</span>
                    </p>
                    <div
                        className='panel__button'
                        onClick={() => {
                            console.log('open me');
                        }}
                    >
                        {item.buttons[0].icon}
                    </div>
                </div>
            </div>
        );
    });

    const academic = academicItems.map((item, i) => {
        return (
            <div key={item.id} id={item.id} className={'panel ' + 'panel--' + acaAspectRatios[i]}>
                <div className='panel__image' style={{ backgroundImage: 'url(' + item.img + ')' }}></div>
                <div className='panel__content'>
                    <h2 className='panel__content__title'>{item.title}</h2>
                    <p className='panel__content__tag'>
                        <span>{item.tag}</span>
                    </p>
                    <p className='panel__content__taster'>
                        <span>{item.taster}</span>
                    </p>
                    <div
                        className='panel__button'
                        onClick={() => {
                            console.log('open me');
                        }}
                    >
                        {item.buttons[0].icon}
                    </div>
                </div>
            </div>
        );
    });

    // Add in mega-titles that are absolutely positioned but are translated to their require position (eg 50% of the way down)
    // Keyboard compatability
    return (
        <Section selector={'portfolio'} classes={[]}>
            <Container classes='portfolio'>
                <>
                    <div className='timeline'></div>
                    <div className='timeline__title'>
                        <h2>{'<Portfolio />'}</h2>
                        <div className='mega-title'>
                            <h1>Portfolio</h1>
                        </div>
                    </div>

                    <div className='portfolio__container'>{professional}</div>
                    <div className='portfolio__container'>{academic}</div>
                </>
            </Container>
        </Section>
    );
};
