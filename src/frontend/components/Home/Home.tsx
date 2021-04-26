import React from 'react';

import { Heading } from '../UI/Typography/Heading/Heading';
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';

import './Home.scss';

// import propic from '../../assets/pictures/propic.jpg';

export const Home = (): JSX.Element => {
    // move to container
    const scrollTo = () => {
        const wHeight = window.innerHeight;
        console.log('SCROLL');
        window.scrollTo({ top: wHeight, behavior: 'smooth' });
    };

    return (
        <>
            <Section classes={['default', 'end-center']}>
                <Container classes={'hero'}>
                    <>
                        <div className='hero__text'>
                            <Heading
                                importance={4}
                                title={'Samuel Renshaw-Panting'}
                                classes={['spaced', 'underline']}
                            />
                            <p className=''>Software Engineering Graduate & Web Developer</p>
                        </div>
                        <div className='hero__next'>
                            <div className='hero__next__item' onClick={() => scrollTo()}>
                                <p className='hero__next__item__label'>next()</p>
                                <span className='hero__next__item__arrow-down'></span>
                            </div>
                        </div>
                    </>
                </Container>
            </Section>
            <Section classes={['default', 'portfolio']}>
                <Container classes={'portfolio__content'}>
                    <div></div>
                </Container>
            </Section>
        </>
    );
};
