import React from 'react';
import { Icons } from '../../lib/interfaces';

import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';
import { Timeline } from '../UI/Timeline/Timeline';

import { SocialStack } from '../SocialStack/SocialStack';

import './Hero.scss';

type HeroProps = {
    socials: Icons;
};

export const Hero = ({ socials }: HeroProps): JSX.Element => {
    const scrollTo = () => {
        const wHeight = window.innerHeight - 80;
        const sitePagesHeight = document.querySelector('.section--about').parentNode.offsetHeight;

        const scrollDist = sitePagesHeight > wHeight ? wHeight : sitePagesHeight;

        window.scrollTo({ top: scrollDist, behavior: 'smooth' });
    };

    return (
        <>
            <Section selector={'hero'} classes={[]}>
                <>
                    <div className='hint'>
                        <p>Psst... touch the background</p>
                    </div>
                    <SocialStack socials={socials} />
                    <Container classes={'hero'}>
                        <>
                            <Timeline title={'Welcome'} megaTitle={false} />
                            <div className='hero__content'>
                                <div className='hero__content__text'>
                                    <p>Hi, I&apos;m Sam, a Software Engineering Graduate & Web Developer</p>
                                </div>
                                <div className='hero__content__next'>
                                    <div className='hero__content__next__item' onClick={() => scrollTo()}>
                                        <p className='hero__content__next__item__label'>Let&apos;s get going...</p>
                                        <span className='hero__content__next__item__arrow-down'></span>
                                    </div>
                                </div>
                            </div>
                        </>
                    </Container>
                </>
            </Section>
        </>
    );
};
