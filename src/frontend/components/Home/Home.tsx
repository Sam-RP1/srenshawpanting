import React from 'react';
import { NavLink } from 'react-router-dom';

import { Heading } from '../UI/Typography/Heading/Heading';
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';

import './Home.scss';

type HomeProps = {
    sitePages: {
        icon: JSX.Element;
        id: string;
        megaTitle: string;
        title: string;
        route: string;
    }[];
    arrowsIcon: JSX.Element;
};

export const Home = ({ sitePages, arrowsIcon }: HomeProps): JSX.Element => {
    const scrollTo = () => {
        const wHeight = window.innerHeight - 80;
        const sitePagesHeight = document.querySelector('.site-pages').parentNode.offsetHeight;

        const scrollDist = sitePagesHeight > wHeight ? wHeight : sitePagesHeight;

        window.scrollTo({ top: scrollDist, behavior: 'smooth' });
    };

    const content = sitePages.map((page) => {
        return (
            <div key={page.id} id={page.id} className='site-pages__tile'>
                <NavLink to={page.route} className='site-pages__tile__content container'>
                    <div className='site-pages__tile__mega-title'>
                        <h1>{page.megaTitle}</h1>
                    </div>
                    <div className='site-pages__tile__icon'>{page.icon}</div>
                    <div className='site-pages__tile__text'>
                        <h3>{page.title}</h3>
                        <div className='icon-wrapper'>{arrowsIcon}</div>
                    </div>
                </NavLink>
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
