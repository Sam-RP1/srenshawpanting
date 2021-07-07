import React from 'react';

// Component Imports
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';
import { Timeline } from '../UI/Timeline/Timeline';

import { Icon } from '../../lib/interfaces';

// Styles
import './Portfolio.scss';

// Types
type PortfolioProps = {
    professionalItems: {
        id: string;
        title: string;
        created: string;
        shortTaster: string;
        taster: string;
        description: string;
        tags: string[];
        buttons: {
            id: string;
            url: string;
            icon: Icon;
            label: string;
        }[];
        img: string;
    }[];
    academicItems: {
        id: string;
        title: string;
        created: string;
        shortTaster: string;
        taster: string;
        description?: string;
        tags: string[];
        buttons: {
            id: string;
            url: string;
            icon: Icon;
            label: string;
        }[];
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

    const professional = professionalItems.map(({ id, title, img, shortTaster, taster, tags, buttons }, i) => (
        <div key={id} id={id} className={'panel ' + 'panel--' + proAspectRatios[i]}>
            <div className='panel__image' style={{ backgroundImage: 'url(' + img + ')' }}></div>
            <div className='panel__content'>
                <h2 className='panel__content__title'>{title}</h2>
                <p className='panel__content__short-taster'>
                    <span>{shortTaster}</span>
                </p>
                <p className='panel__content__taster'>
                    <span>{taster}</span>
                </p>
                <div className='panel__content__tags'>
                    {tags.map((tag) => (
                        <p key={id + '-tag-' + tag}>{tag}</p>
                    ))}
                </div>
                <div className='panel__buttons'>
                    {buttons.map(({ id, url, icon, label }) => (
                        <div key={id} className='btn'>
                            <span>{label}</span>
                            {icon.icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ));

    const academic = academicItems.map(({ id, title, img, shortTaster, taster, tags, buttons }, i) => (
        <div key={id} id={id} className={'panel ' + 'panel--' + acaAspectRatios[i]}>
            <div className='panel__image' style={{ backgroundImage: 'url(' + img + ')' }}></div>
            <div className='panel__content'>
                <h2 className='panel__content__title'>{title}</h2>
                <p className='panel__content__short-taster'>
                    <span>{shortTaster}</span>
                </p>
                <p className='panel__content__taster'>
                    <span>{taster}</span>
                </p>
                <div className='panel__content__tags'>
                    {tags.map((tag) => (
                        <p key={id + '-tag-' + tag}>{tag}</p>
                    ))}
                </div>
                <div className='panel__buttons'>
                    {buttons.map(({ id, url, icon, label }) => (
                        <div key={id} className='btn'>
                            <span>{label}</span>
                            {icon.icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ));

    // Add in mega-titles that are absolutely positioned but are translated to their require position (eg 50% of the way down)
    // Keyboard compatability
    return (
        <Section selector={'portfolio'} classes={[]}>
            <Container classes='portfolio'>
                <>
                    <Timeline title={'Portfolio'} megaTitle={true} />

                    <div className='portfolio__container'>{professional}</div>
                    <div className='portfolio__container'>{academic}</div>
                </>
            </Container>
        </Section>
    );
};
