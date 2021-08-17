import React, { useState, useEffect } from 'react';

// Component Imports
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';
import { Timeline } from '../UI/Timeline/Timeline';
import { Spinner } from '../UI/Spinner/Spinner';

import { Icon } from '../../lib/interfaces';

// Styles
import './Portfolio.scss';

// Types
type PortfolioProps = {
    portfolioContent: {
        id: string;
        title: string;
        created: string;
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
};

/**
 * Exports Portfolio component
 * @returns JSX.Element
 */
export const Portfolio = ({ portfolioContent }: PortfolioProps): JSX.Element => {
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState(undefined);
    const aspectRatios = ['ar-4', 'ar-1', 'ar-3', 'ar-1', 'ar-4', 'ar-3', 'ar-4', 'ar-2'];

    console.log(portfolioContent[0]);
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/complete
    // https://stackoverflow.com/questions/43115246/how-to-detect-when-a-image-is-loaded-that-is-provided-via-props-and-change-sta
    // useEffect(() => {
    //     if (portfolioContent.img.length !== 0) {
    //         setIsLoading(false);
    //         setImages(flickrContent);
    //     } else {
    //         setIsLoading(true);
    //     }

    //     const splide = new Splide('.splide', {
    //         type: 'slide',
    //         rewind: 'true', // rewind from 1 to last or last to 1
    //         height: 295,
    //         autoHeight: false,
    //         width: 500,
    //         autoWidth: false,
    //         gap: 10,
    //         arrows: false,
    //         focus: 'center',
    //     }).mount();

    //     return () => {
    //         splide.destroy();
    //     };
    // }, [portfolioContent]);

    const content = portfolioContent.map(({ id, title, img, taster, tags, buttons }, i) => (
        <div key={id} id={id} className={'panel ' + 'panel--' + aspectRatios[i]}>
            <div className='panel__image'>{isLoading ? <Spinner /> : <img src={img} />}</div>
            <div className='panel__content'>
                <h2 className='panel__content__title'>{title}</h2>

                <p className='panel__content__taster'>{taster}</p>

                <div className='panel__content__tags'>
                    {tags.map((tag) => (
                        <p key={id + '-tag-' + tag}>{tag}</p>
                    ))}
                </div>

                <div className='panel__content__buttons'>
                    {buttons.map(({ id, url, icon, label }) => (
                        <a key={id} href={url} target='__blank'>
                            <span>{label}</span>
                            {icon.icon}
                        </a>
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

                    <div className='portfolio__container'>{content}</div>
                </>
            </Container>
        </Section>
    );
};
