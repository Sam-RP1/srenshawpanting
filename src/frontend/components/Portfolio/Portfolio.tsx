import React, { useState } from 'react';

// Component Imports
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';
import { Timeline } from '../UI/Timeline/Timeline';
import { Spinner } from '../UI/Spinner/Spinner';

// Styles
import './Portfolio.scss';

// Types
import { ProjectsType } from '../../lib/types';

/**
 * Exports Portfolio component
 * @returns JSX.Element
 */
export const Portfolio = ({ portfolioContent }: ProjectsType): JSX.Element => {
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState(undefined);
    const aspectRatios = ['ar-16x9', 'ar-4x5', 'ar-4x3', 'ar-16x9', 'ar-16x9', 'ar-4x5', 'ar-4x3', 'ar-16x9', 'ar-4x5'];

    const content = portfolioContent.map(
        ({ id, title, portfolio: { thumbnail }, definition, tags, portfolio: { buttons } }, i) => (
            <div key={id} id={id} className={'panel ' + 'panel--' + aspectRatios[i]}>
                <div className='panel__image'>{isLoading ? <Spinner /> : <img src={thumbnail} />}</div>
                <div className='panel__content'>
                    <h2 className='panel__content__title'>{title}</h2>

                    <p className='panel__content__taster'>{definition}</p>

                    <div className='panel__content__tags'>
                        {tags.map((tag) => (
                            <p key={id + '-tag-' + tag}>{tag}</p>
                        ))}
                    </div>

                    <div className='panel__content__buttons'>
                        {buttons.map(({ id, url, icon, label, newTab }) =>
                            newTab === true ? (
                                <a key={id} href={url} target='__blank'>
                                    <span>{label}</span>
                                    {icon.icon}
                                </a>
                            ) : (
                                <a key={id} href={url}>
                                    <span>{label}</span>
                                    {icon.icon}
                                </a>
                            )
                        )}
                    </div>
                </div>
            </div>
        )
    );

    // Add in mega-titles that are absolutely positioned but are translated to their require position (eg 50% of the way down)
    // Keyboard compatability
    return (
        <Section selector={'portfolio'} classes={[]}>
            <Container classes='portfolio'>
                <>
                    <Timeline title={'Portfolio'} megaTitle={true} />

                    <div className='portfolio__container'>{content}</div>
                </>
            </Container>
        </Section>
    );
};
