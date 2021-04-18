import React from 'react';

import { Heading } from '../UI/Typography/Heading/Heading';
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';

import { Icons } from '../../lib/interfaces';

import './Portfolio.scss';

type PortfolioProps = {
    professionalItems: {
        id: string;
        title: string;
        created: string;
        description: string;
        techStack: string;
        buttons: Icons;
    }[];
    academicItems: {
        id: string;
        title: string;
        created: string;
        description: string;
        techStack?: string;
        buttons: Icons;
    }[];
};

export const Portfolio = ({ professionalItems, academicItems }: PortfolioProps): JSX.Element => {
    const professional = professionalItems.map((item) => {
        return (
            <div key={item.id} className='portfolio__item'>
                <Container classes='portfolio__item__content'>
                    <>
                        <div className='portfolio__item__content__title'>
                            <Heading importance={4} title={item.title} classes={['spaced']} />
                        </div>

                        <div className='portfolio__item__content__description'>
                            <p>
                                {item.description} {item.techStack}
                            </p>
                        </div>
                        <div className='portfolio__item__content__buttons'>
                            {item.buttons.map((btn) => {
                                return (
                                    <a key={btn.id} href={btn.url} target='_blank' rel='noreferrer'>
                                        <div className=''>{btn.label}</div>
                                        <div className='icon-wrapper'>{btn.icon}</div>
                                    </a>
                                );
                            })}
                        </div>
                    </>
                </Container>
            </div>
        );
    });

    const academic = academicItems.map((item) => {
        return (
            <div key={item.id} className='portfolio__item'>
                <Container classes='portfolio__item__content indent'>
                    <>
                        <div className='portfolio__item__content__title'>
                            <Heading importance={4} title={item.title} classes={['spaced']} />
                        </div>

                        <div className='portfolio__item__content__description'>
                            <p>
                                {item.description} {item.techStack}
                            </p>
                        </div>
                        <div className='portfolio__item__content__buttons'>
                            {item.buttons.map((btn) => {
                                return (
                                    <a key={btn.id} href={btn.url} target='_blank' rel='noreferrer'>
                                        <div className=''>{btn.label}</div>
                                        <div className='icon-wrapper'>{btn.icon}</div>
                                    </a>
                                );
                            })}
                        </div>
                    </>
                </Container>
            </div>
        );
    });

    return (
        <Section classes={['center-center', 'portfolio']}>
            <div className='portfolio__content'>
                <Container>
                    <Heading importance={3} title={'Portfolio'} classes={['spaced']} open={true} />
                </Container>

                <div className='portfolio__content__container'>{professional}</div>

                <Container>
                    <Heading importance={3} title={'Academics'} classes={['spaced', 'indent']} open={true} />
                </Container>

                <div className='portfolio__content__container'>{academic}</div>

                <Container>
                    <>
                        <Heading importance={3} title={'Academics'} classes={['spaced', 'indent']} close={true} />
                        <Heading importance={3} title={'Portfolio'} classes={['spaced']} close={true} />
                    </>
                </Container>
            </div>
        </Section>
    );
};
