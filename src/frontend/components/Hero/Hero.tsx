import React from 'react';

import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';
import { Timeline } from '../UI/Timeline/Timeline';

import { HeroProps } from '../../lib/types';
import { SocialStack } from '../SocialStack/SocialStack';

import './Hero.scss';

export const Hero = ({ title, content, nextItemLabel, socials }: HeroProps): JSX.Element => {
    const scrollTo = () => {
        const wHeight = window.innerHeight - 80;
        window.scrollTo({ top: wHeight, behavior: 'smooth' });
    };

    return (
        <Section selector={'hero'}>
            <>
                <SocialStack socials={socials} />
                <Container classes={'hero'}>
                    <>
                        <Timeline title={title} megaTitle={true} />
                        <div className='hero__content'>
                            <div className='hero__content__text'>
                                <p>{content}</p>
                            </div>
                            <div className='hero__content__next'>
                                <div className='hero__content__next__item' onClick={() => scrollTo()}>
                                    <p className='hero__content__next__item__label'>{nextItemLabel}</p>
                                    <span className='hero__content__next__item__arrow-down'></span>
                                </div>
                            </div>
                        </div>
                    </>
                </Container>
            </>
        </Section>
    );
};
