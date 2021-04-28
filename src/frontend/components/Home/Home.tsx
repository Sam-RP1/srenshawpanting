import React from 'react';
import { NavLink } from 'react-router-dom';

import { Heading } from '../UI/Typography/Heading/Heading';
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';

import { Icon, Icons } from '../../lib/interfaces';

import './Home.scss';

type HomeProps = {
    sitePages: {
        hero: Icon;
        megaTitle: string;
        id: string;
        title: string;
        route: string;
        buttons: Icons;
    }[];
};

export const Home = ({ sitePages }: HomeProps): JSX.Element => {
    const scrollTo = () => {
        const wHeight = window.innerHeight - 172;
        // Scroll the height of the where next parent elem
        window.scrollTo({ top: wHeight, behavior: 'smooth' });
    };

    // On mobile have padding turned off on the parent elem so the blur/bg is 100% width then on desktop have it so that there is 1rem padding

    const content = sitePages.map((page) => {
        return (
            <div key={page.id} className='site-pages__tile '>
                <div className='site-pages__tile__content container'>
                    <div className='site-pages__tile__mega-title'>
                        <h1>{page.megaTitle}</h1>
                    </div>
                    <div className='site-pages__tile__hero'>{page.hero}</div>

                    {page.buttons.map((btn) => {
                        return (
                            <NavLink key={page.id + page.route} to={page.route} className='site-pages__tile__button'>
                                <h3>{page.title}</h3>
                                <div className='icon-wrapper'>{btn.icon}</div>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        );
    });

    return (
        <>
            <Section classes={['top', 'end-center']}>
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
                                <p className='hero__next__item__label'>Where next?</p>
                                <span className='hero__next__item__arrow-down'></span>
                            </div>
                        </div>
                    </>
                </Container>
            </Section>
            <Section classes={['default', 'center-center']}>
                <Container classes={'site-pages'}>
                    <>{content}</>
                </Container>
            </Section>
        </>
    );
};
