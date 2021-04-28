import React from 'react';

import { Heading } from '../UI/Typography/Heading/Heading';
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';

import './About.scss';

// type AboutProps = {};

export const About = (): JSX.Element => {
    return (
        <Section classes={['top', 'center-center', 'about']}>
            <Container>
                <article className='about__content'>
                    <Heading importance={3} title={'About'} classes={['uppercase', 'spaced', 'underline']} />
                    <p>
                        Hi there! I&apos;m Sam, a 22-year-old Web Developer and Software Engineering graduate. I&apos;m
                        an enthusiastic guy with a passion for the web and its multitude of technologies.
                    </p>
                    <p>
                        I like to compose captivating designs, create smart user interfaces, solve complex problems,
                        squash troublesome bugs, develop rich web experiences and web applications.
                    </p>
                    <p>
                        As well as, I enjoy consistently pushing myself by learning new languages, frameworks and
                        technologies in addition to further improving my abilities in ones I am already familiar with.
                    </p>
                    <p>
                        When I&apos;m not learning, conceptualising, designing or developing, you&apos;ll most likely
                        find me either exercising, playing with my dog, listening to music or being below average at
                        chess.
                    </p>
                    <div className='about__content__lists-container'>
                        <div className='about__content__lists-container__list'>
                            <Heading importance={4} title={'Competencies:'} classes={['spaced']} />
                            <ul className='wrap'>
                                <li>HTML</li>
                                <li>CSS & SASS</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Jest</li>
                                <li>MySQL</li>
                                <li>Webpack</li>
                                <li>Express</li>
                                <li>Socket.io</li>
                            </ul>
                        </div>
                        <div className='about__content__lists-container__list'>
                            <Heading importance={4} title={'Interests:'} classes={['spaced']} />
                            <ul>
                                <li>Web Design</li>
                                <li>UI & UX</li>
                                <li>Frontend Web Development</li>
                                <li>Backend Development</li>
                                <li>Fullstack Development</li>
                                <li>Cloud Computing</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </Container>
        </Section>
    );
};
