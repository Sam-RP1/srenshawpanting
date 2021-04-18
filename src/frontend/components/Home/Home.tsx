import React from 'react';

import { Heading } from '../UI/Typography/Heading/Heading';
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';

import './Home.scss';

import propic from '../../assets/pictures/propic.jpg';

export const Home = (): JSX.Element => {
    return (
        <Section classes={['default', 'end-center', 'home']}>
            <Container classes={'home__content'}>
                <>
                    <article className='home__content__hero-text'>
                        <Heading importance={3} title={'Samuel Renshaw-Panting'} classes={['spaced', 'underline']} />
                        <p className=''>Software Engineering Graduate & Web Developer</p>
                    </article>
                    {/* <div className='home__content__pic'>
                        <img src={propic} />
                    </div> */}
                </>
            </Container>
        </Section>
    );
};
