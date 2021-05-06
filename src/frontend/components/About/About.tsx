import React from 'react';

import { Heading } from '../UI/Typography/Heading/Heading';
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';

import './About.scss';
import './Code.scss';

// type AboutProps = {};

export const About = (): JSX.Element => {
    return (
        <Section classes={['top', 'center-center']}>
            <Container classes={'about'}>
                <article className='code__container'>
                    <p className='code__line'>
                        <span className='code--keyword'>const</span> <span className='code--function'>About</span>{' '}
                        <span className='code--symbol'>=</span> ( )<span className='code--symbol'>:</span>{' '}
                        <span className='code--special'>string</span>[] <span className='code--keyword'>={'>'}</span>{' '}
                        {'{'}
                    </p>
                    <p className='code__line'>
                        <span className='code--keyword'>return</span> competenciesArr;
                    </p>
                    <p className='code__line'>{'}'}</p>
                    {/* COMPETENCIES BLOCK */}
                    <p className='code__line'>
                        <span className='code--keyword'>const</span>{' '}
                        <span className='code--function'>competencies</span> <span className='code--symbol'>=</span> [
                    </p>
                    <p className='code__line'>
                        <span className='code--string'>&apos;HTML/CSS/JS&apos;</span>,{' '}
                        <span className='code--string'>&apos;SASS&apos;</span>,{' '}
                        <span className='code--string'>&apos;React&apos;</span>,{' '}
                        <span className='code--string'>&apos;Redux&apos;</span>,{' '}
                        <span className='code--string'>&apos;Jest/Enzyme&apos;</span>,{' '}
                        <span className='code--string'>&apos;MySQL/NoSQL&apos;</span>,{' '}
                        <span className='code--string'>&apos;Webpack&apos;</span>,{' '}
                        <span className='code--string'>&apos;Node.js&apos;</span>,{' '}
                        <span className='code--string'>&apos;npm&apos;</span>,{' '}
                        <span className='code--string'>&apos;Express.js&apos;</span>,{' '}
                        <span className='code--string'>&apos;Websockets/Socket.io&apos;</span>,{' '}
                        <span className='code--string'>&apos;PWA&apos;</span>,{' '}
                        <span className='code--string'>&apos;SPA&apos;</span>,{' '}
                        <span className='code--string'>&apos;AWS/GCP&apos;</span>
                    </p>
                    <p className='code__line'>];</p>
                    {/* INTERESTS BLOCK */}
                    <p className='code__line'>
                        <span className='code--keyword'>const</span> <span className='code--function'>interests</span>{' '}
                        <span className='code--symbol'>=</span> [
                    </p>
                    <p className='code__line'>
                        <span className='code--string'>&apos;Web Design&apos;</span>,{' '}
                        <span className='code--string'>&apos;UI&apos;</span>,{' '}
                        <span className='code--string'>&apos;UX&apos;</span>,{' '}
                        <span className='code--string'>&apos;Frontend Development&apos;</span>,{' '}
                        <span className='code--string'>&apos;Backend Development&apos;</span>,{' '}
                        <span className='code--string'>&apos;Fullstack Development&apos;</span>,{' '}
                        <span className='code--string'>&apos;Cloud Computing&apos;</span>,{' '}
                        <span className='code--string'>&apos;Drones&apos;</span>,{' '}
                        <span className='code--string'>&apos;Photography&apos;</span>,{' '}
                        <span className='code--string'>&apos;Fitness&apos;</span>,{' '}
                        <span className='code--string'>&apos;Nutrition&apos;</span>,{' '}
                        <span className='code--string'>&apos;NFL&apos;</span>,{' '}
                        <span className='code--string'>&apos;Chess&apos;</span>,{' '}
                        <span className='code--string'>&apos;Music&apos;</span>,{' '}
                        <span className='code--string'>&apos;Halo&apos;</span>,{' '}
                    </p>
                    <p className='code__line'>];</p>

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
                </article>
            </Container>
        </Section>
    );
};
