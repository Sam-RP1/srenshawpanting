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
    // const linkElems = links.map((link, i) => {
    //     const isDivided = i <= links.length - 2 ? <div>|</div> : null;
    //     return (
    //         <React.Fragment key={link.id + '-footer'}>
    //             {link.url}
    //             {isDivided}
    //         </React.Fragment>
    //     );
    // });

    return (
        <Section classes={['default', 'center-center', 'portfolio']}>
            <Container classes={'portfolio__content'}>
                <>
                    <Heading importance={3} title={'Portfolio'} classes={['uppercase', 'spaced', 'underline']} />

                    <div className='portfolio__content__container'>
                        <div id='deduction' className='portfolio__tile'>
                            <div className='portfolio__tile__preview'>
                                <div className='portfolio__tile__preview__filter'></div>
                            </div>
                            <div className='portfolio__tile__label'>
                                <Heading importance={5} title={'Deduction'} classes={['spaced']} />
                                <p>Multiplayer Web Game</p>
                            </div>
                        </div>

                        <div id='peerreviewportal' className='portfolio__tile'>
                            <div className='portfolio__tile__preview'>
                                <div className='portfolio__tile__preview__filter'></div>
                            </div>
                            <div className='portfolio__tile__label'>
                                <Heading importance={5} title={'Peer Review Portal'} classes={['spaced']} />
                                <p>Web Application</p>
                            </div>
                        </div>
                    </div>
                </>
            </Container>
        </Section>
    );
};
