import React from 'react';
import Particles from 'react-tsparticles';

import './Background.scss';

export const Background = (): JSX.Element => {
    return (
        <>
            <Particles
                id='background'
                canvasClassName={'backgroundcanvas'}
                options={{
                    background: {
                        color: {
                            value: 'transparent',
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            onClick: {
                                enable: false,
                                mode: 'push',
                            },
                            onHover: {
                                enable: false,
                                mode: 'repulse',
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: '#5d7287',
                        },
                        links: {
                            color: '#b2bdce',
                            distance: 110,
                            enable: true,
                            opacity: 0.2,
                            width: 1.5,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: true,
                            speed: 0.035,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 85,
                        },
                        opacity: {
                            value: 0.35,
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            random: true,
                            value: 4,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className='planet--1'>
                <svg viewBox='0 0 130 130'>
                    <path
                        d='M0,78 a65,25 0 1 1 102.5,45'
                        stroke='#5d7287'
                        strokeWidth='2'
                        fill='transparent'
                        transform='rotate(45,100,100)'
                    />
                    <circle cx='65' cy='65' r='45' fill='#242c33' />
                    <path
                        d='M0,78 a65,25 0 1 0 102.5,45'
                        stroke='#5d7287'
                        strokeWidth='2'
                        fill='transparent'
                        transform='rotate(45,100,100)'
                    />
                </svg>
            </div>
            <div className='planet--2'>
                <svg viewBox='0 0 130 130'>
                    <path
                        d='M0,78 a65,25 0 1 1 102.5,45'
                        stroke='#5d7287'
                        strokeWidth='2'
                        fill='transparent'
                        transform='rotate(45,100,100)'
                    />
                    <circle cx='65' cy='65' r='45' fill='#242c33' />
                    <path
                        d='M0,78 a65,25 0 1 0 102.5,45'
                        stroke='#5d7287'
                        strokeWidth='2'
                        fill='transparent'
                        transform='rotate(45,100,100)'
                    />
                </svg>
            </div>
        </>
    );
};
