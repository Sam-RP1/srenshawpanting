import React from 'react';
import { Link, Icon } from '../../lib/interfaces';

import { Heading } from '../UI/Typography/Heading/Heading';
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';

import './Portfolio.scss';

type PortfolioProps = {
    links: Link[];
    icons: Icon[];
};

export const Portfolio = ({ links, icons }: PortfolioProps): JSX.Element => {
    const portfolioItems = [
        {
            id: 'deduction',
            title: 'Deduction',
            description: 'Multiplayer Web Game',
        },
        {
            id: 'peerreviewportal',
            title: 'Peer Review Portal',
            description: 'Web Application',
        },
        {
            id: 'letterdetonator',
            title: 'Letter Detonator',
            description: 'Web Game',
        },
        {
            id: 'karensbeautybox',
            title: 'Karens Beauty Box',
            description: 'Website',
        },
        {
            id: 'pudhub',
            title: 'P.U.D Hub',
            description: 'Web Application',
        },
        {
            id: 'fred',
            title: 'FRED',
            description: 'Website',
        },
        {
            id: 'robotics',
            title: 'Robotics',
            description: 'Univeristy Coursework',
        },
        {
            id: 'distibutedsystems',
            title: 'Distributed Systems',
            description: 'Univeristy Research',
        },
        {
            id: 'literaturereview',
            title: 'Mitigating Data Exposure',
            description: 'Univeristy Literature Review',
        },
    ];

    const portfolioTiles = portfolioItems.map((item) => {
        return (
            <div key={item.id} id={item.id} className='portfolio__tile'>
                <div className='portfolio__tile__preview'>
                    <div className='portfolio__tile__preview__filter'></div>
                </div>
                <div className='portfolio__tile__label'>
                    <Heading importance={5} title={item.title} classes={['spaced']} />
                    <p>{item.description}</p>
                </div>
            </div>
        );
    });

    return (
        <Section classes={['default', 'center-center', 'portfolio']}>
            <Container classes={'portfolio__content'}>
                <>
                    <Heading importance={3} title={'Portfolio'} classes={['uppercase', 'spaced', 'underline']} />

                    <div className='portfolio__content__container'>{portfolioTiles}</div>
                </>
            </Container>
        </Section>
    );
};
