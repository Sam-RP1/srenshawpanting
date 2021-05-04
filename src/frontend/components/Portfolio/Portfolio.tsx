import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';

import { Heading } from '../UI/Typography/Heading/Heading';
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';

import { Icons } from '../../lib/interfaces';

import './Portfolio.scss';
// Could add a next and/or prev button to the timeline to jump between sections/segements using state and stuff when it is its own component

type PortfolioProps = {
    professionalItems: {
        id: string;
        title: string;
        created: string;
        description: string;
        techStack: string;
        buttons: Icons;
        img: string;
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
    const professional = professionalItems.map((item, i) => {
        const img = item.img;
        return (
            <div key={item.id} className='portfolio__panel'>
                <div onClick={() => console.log('OPEN PROJECT')} className='portfolio__panel__container'>
                    <div className='portfolio__panel__image' style={{ backgroundImage: 'url(' + img + ')' }}></div>
                    <div className='portfolio__panel__glare'>
                        <div className='portfolio__panel__glare__inner'></div>
                    </div>

                    <div className='portfolio__panel__content'>
                        <div className='portfolio__panel__info'>
                            <div className='portfolio__panel__title'>
                                <h5>{item.title}</h5>
                            </div>
                            <div className='portfolio__panel__detail'>
                                <p className='portfolio__panel__int'>[{'0' + i}]</p>
                                <p className='portfolio__panel__context'>{item.description}</p>
                            </div>
                        </div>
                        {item.buttons.map((btn) => {
                            return (
                                <div key={btn.id} className='icon-wrapper'>
                                    {btn.icon}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    });

    const academic = academicItems.map((item, i) => {
        const img = item.img;
        return (
            <div key={item.id} className='portfolio__panel'>
                <div onClick={() => console.log('OPEN PROJECT')} className='portfolio__panel__container'>
                    <div className='portfolio__panel__image' style={{ backgroundImage: 'url(' + img + ')' }}></div>
                    <div className='portfolio__panel__glare'>
                        <div className='portfolio__panel__glare__inner'></div>
                    </div>

                    <div className='portfolio__panel__content'>
                        <div className='portfolio__panel__info'>
                            <div className='portfolio__panel__title'>
                                <h5>{item.title}</h5>
                            </div>
                            <div className='portfolio__panel__detail'>
                                <p className='portfolio__panel__int'>[{'0' + i}]</p>
                                <p className='portfolio__panel__context'>{item.description}</p>
                            </div>
                        </div>
                        {item.buttons.map((btn) => {
                            return (
                                <div key={btn.id} className='icon-wrapper'>
                                    {btn.icon}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    });

    useEffect(() => {
        const ANGLE = 45;
        // disable on small screen devices

        const onMouseEnter = (elem) => {
            elem.style.transition = `all 200ms cubic-bezier(0.3, 0.98, 0.52, 0.99)`;
            setTimeout(() => {
                elem.style.transition = 'initial';
            }, 201);
        };

        const onMouseLeave = (elem) => {
            elem.style.transition = `all 200ms cubic-bezier(0.3, 0.98, 0.52, 0.99)`;
            elem.style.transform = `perspective(700px)
                           rotateX(0deg)
                           rotateY(0deg)
                           rotateZ(0deg)`;
            setTimeout(() => {
                elem.style.transition = 'initial';
            }, 201);
        };

        const onMouseMove = (e, parentElem, childElem) => {
            const w = parentElem.clientWidth;
            const h = parentElem.clientHeight;
            const y = ((e.offsetX - w * 0.5) / w) * ANGLE;
            const x = ((e.offsetY - h * 0.5) / h) * ANGLE;
            gsap.to(childElem, {
                duration: 0,
                perspective: 700,
                rotateX: x,
                rotateY: y,
                rotateZ: 0,
                scale: 1.05,
            });
            // scale??
        };

        // make into non-anonymous functions
        document.querySelectorAll('.portfolio__panel').forEach((panel) => {
            const panelContainer = panel.querySelector('.portfolio__panel__container');
            panel.addEventListener('mouseenter', () => onMouseEnter(panelContainer));

            panel.addEventListener('mouseout', () => onMouseLeave(panelContainer));

            panel.addEventListener('mousemove', (e) => onMouseMove(e, panel, panelContainer));
        });

        return () => {
            document.querySelectorAll('.portfolio__panel').forEach((elem) => {
                // elem.removeEventListener();
            });
        };
    }, []);

    return (
        <Section classes={['top', 'center-center']}>
            <Container classes='portfolio'>
                <>
                    <div className='portfolio__intro'>
                        <div className='timeline'></div>
                        <div className='portfolio__content-wrapper'>
                            <div className='timeline__title-container'>
                                <h3 className='timeline__title'>Portfolio{'/>'}</h3>
                            </div>
                            {/* <p>Select projects spanning both my professional and educational careers.</p> */}
                            {professional}
                        </div>
                    </div>

                    <div className='portfolio__item'>
                        <div className='timeline'></div>
                        <div className='portfolio__content-wrapper'>
                            <div className='timeline__title-container'>
                                <h3 className='timeline__title'>Portfolio</h3>
                            </div>

                            {academic}
                        </div>
                    </div>
                </>
            </Container>
        </Section>
    );
};
