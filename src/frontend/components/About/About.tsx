import React from 'react';

import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';

import { reactIcon } from '../../lib/icons';

import './About.scss';
import './Code.scss';

// type AboutProps = {};

export const About = (): JSX.Element => {
    //use state to manage open editor tab
    return (
        <Section selector={'about'}>
            <Container classes={'about'}>
                <>
                    <div className='timeline'></div>
                    <div className='timeline__title'>
                        <h2>{'<About />'}</h2>
                        <div className='mega-title'>
                            <h1>About</h1>
                        </div>
                    </div>

                    <div className='editor'>
                        <div className='editor__header'>
                            <div className='editor__header__controls'>
                                <div className='close'></div>
                                <div className='minimise'></div>
                                <div className='restore'></div>
                            </div>

                            <div className='editor__header__title'>
                                <p>
                                    srenshawpanting <span>- About.tsx</span>
                                </p>
                            </div>
                        </div>

                        <div className='editor__tabs'>
                            <div className='editor__tab active'>
                                {reactIcon.icon}
                                <p>About.tsx</p>
                                <span>&#x2715;</span>
                            </div>
                            <div className='editor__tab'>
                                {reactIcon.icon}
                                <p>Education.tsx</p>
                                <span>&#x2715;</span>
                            </div>
                            <div className='editor__tab'>
                                {reactIcon.icon}
                                <p>Experience.tsx</p>
                                <span>&#x2715;</span>
                            </div>
                            <div className='editor__tab'>
                                {reactIcon.icon}
                                <p>Skills.tsx</p>
                                <span>&#x2715;</span>
                            </div>
                        </div>

                        <div className='editor__window'>
                            <article className='editor__file'>
                                <p className='editor__file__line'>
                                    <span className='keyword'>const</span> <span className='function'>description</span>{' '}
                                    <span className='symbol'>=</span>{' '}
                                    <span className='string'>
                                        &apos;Hi there! I&apos;m Sam, a 22-year-old Web Developer and Software
                                        Engineering graduate. I&apos;m an enthusiastic guy with a passion for the web
                                        and its multitude of technologies.
                                    </span>{' '}
                                    <span className='string'>
                                        I like to compose captivating designs, create smart user interfaces, solve
                                        complex problems, squash troublesome bugs, develop rich web experiences and web
                                        applications.
                                    </span>{' '}
                                    <span className='string'>
                                        As well as, I enjoy consistently pushing myself by learning new languages,
                                        frameworks and technologies in addition to further improving my abilities in
                                        ones I am already familiar with.
                                    </span>{' '}
                                    <span className='string'>
                                        When I&apos;m not learning, conceptualising, designing or developing,
                                        you&apos;ll most likely find me either exercising, playing with my dog,
                                        listening to music or being below average at chess.&apos;
                                    </span>
                                    ;
                                </p>
                            </article>
                            <article className='editor__file'></article>
                            <article className='editor__file'></article>
                            <article className='editor__file'></article>
                        </div>
                    </div>

                    <article className='code__container'>
                        <p className='code__line'>
                            <span className='code--keyword'>const</span> <span className='code--function'>About</span>{' '}
                            <span className='code--symbol'>=</span> ( )<span className='code--symbol'>:</span>{' '}
                            <span className='code--special'>string</span>[]{' '}
                            <span className='code--keyword'>={'>'}</span> {'{'}
                        </p>

                        <p className='code__line'>
                            <span className='code--keyword'>return</span> competenciesArr;
                        </p>
                        <p className='code__line'>{'}'}</p>
                        <p className='code__line'>&nbsp;</p>

                        {/* DATA BLOCK */}
                        <p className='code__line'>
                            <span className='code--keyword'>const</span> <span className='code--function'>srpData</span>{' '}
                            <span className='code--symbol'>=</span>
                            {' {'}
                        </p>
                        <p className='code__line code__line--indent--4'>
                            name: <span className='code--string'>&apos;Samuel Renshaw-Panting&apos;</span>,
                        </p>
                        <p className='code__line code__line--indent--4'>
                            age: <span className='code--integer'>22</span>,
                        </p>
                        <p className='code__line code__line--indent--4'>
                            gender: <span className='code--string'>&apos;Male&apos;</span>,
                        </p>
                        <p className='code__line code__line--indent--4'>
                            dateOfBirth: <span className='code--integer'>906726600000</span>,
                        </p>
                        <p className='code__line code__line--indent--4'>
                            email: <span className='code--string'>&apos;srenshawpanting@gmail.com&apos;</span>,
                        </p>
                        <p className='code__line'>{'}'};</p>
                        <p className='code__line'>&nbsp;</p>

                        {/* DESCRIPTION BLOCK */}
                        <p className='code__line'>
                            <span className='code--keyword'>const</span>{' '}
                            <span className='code--function'>description</span> <span className='code--symbol'>=</span>{' '}
                            <span className='code--string'>
                                &apos;Hi there! I&apos;m Sam, a 22-year-old Web Developer and Software Engineering
                                graduate. I&apos;m an enthusiastic guy with a passion for the web and its multitude of
                                technologies.
                            </span>{' '}
                            <span className='code--string'>
                                I like to compose captivating designs, create smart user interfaces, solve complex
                                problems, squash troublesome bugs, develop rich web experiences and web applications.
                            </span>{' '}
                            <span className='code--string'>
                                As well as, I enjoy consistently pushing myself by learning new languages, frameworks
                                and technologies in addition to further improving my abilities in ones I am already
                                familiar with.
                            </span>{' '}
                            <span className='code--string'>
                                When I&apos;m not learning, conceptualising, designing or developing, you&apos;ll most
                                likely find me either exercising, playing with my dog, listening to music or being below
                                average at chess.&apos;
                            </span>
                            ;
                        </p>
                        <p className='code__line'>&nbsp;</p>

                        {/* COMPETENCIES BLOCK */}
                        <p className='code__line'>
                            <span className='code--keyword'>const</span>{' '}
                            <span className='code--function'>competencies</span> <span className='code--symbol'>=</span>{' '}
                            [
                        </p>
                        <p className='code__line code__string code__line--indent--4'>
                            <span>&apos;HTML&apos;</span>, <span>&apos;CSS&apos;</span>, <span>&apos;JS&apos;</span>,{' '}
                            <span>&apos;SASS&apos;</span>, <span>&apos;React&apos;</span>,{' '}
                            <span>&apos;Redux&apos;</span>, <span>&apos;Jest&apos;</span>,{' '}
                            <span>&apos;Enzyme&apos;</span>, <span>&apos;MySQL&apos;</span>,{' '}
                            <span>&apos;NoSQL&apos;</span>, <span>&apos;Webpack&apos;</span>,{' '}
                            <span>&apos;Node.js&apos;</span>, <span>&apos;npm&apos;</span>,{' '}
                            <span>&apos;Express.js&apos;</span>, <span>&apos;Websockets&apos;</span>,{' '}
                            <span>&apos;Socket.io&apos;</span>, <span>&apos;PWA&apos;</span>,{' '}
                            <span>&apos;SPA&apos;</span>, <span>&apos;AWS&apos;</span>, <span>&apos;GCP&apos;</span>
                        </p>
                        <p className='code__line'>];</p>
                        <p className='code__line'>&nbsp;</p>

                        {/* INTERESTS BLOCK */}
                        <p className='code__line'>
                            <span className='code--keyword'>const</span>{' '}
                            <span className='code--function'>interests</span> <span className='code--symbol'>=</span> [
                        </p>
                        <p className='code__line code__string code__line--indent--4'>
                            <span>&apos;Web Design&apos;</span>, <span>&apos;UI&apos;</span>,{' '}
                            <span>&apos;UX&apos;</span>, <span>&apos;Frontend Development&apos;</span>,{' '}
                            <span>&apos;Backend Development&apos;</span>, <span>&apos;Fullstack Development&apos;</span>
                            , <span>&apos;Cloud Computing&apos;</span>, <span>&apos;Drones&apos;</span>,{' '}
                            <span>&apos;Photography&apos;</span>, <span>&apos;Fitness&apos;</span>,{' '}
                            <span>&apos;Nutrition&apos;</span>, <span>&apos;NFL&apos;</span>,{' '}
                            <span>&apos;Chess&apos;</span>, <span>&apos;Music&apos;</span>,{' '}
                            <span>&apos;Halo&apos;</span>
                        </p>
                        <p className='code__line'>];</p>
                    </article>
                </>
            </Container>
        </Section>
    );
};
