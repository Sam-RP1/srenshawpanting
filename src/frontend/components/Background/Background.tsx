import React from 'react';
import Particles from 'react-tsparticles';

import './Background.scss';

export const Background = (): JSX.Element => {
    return (
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
                        distance: 100,
                        enable: true,
                        opacity: 0.5,
                        width: 1.5,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outMode: 'bounce',
                        random: false,
                        speed: 0.075,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                        value: 90,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'square',
                    },
                    size: {
                        random: true,
                        value: 4,
                    },
                },
                detectRetina: true,
            }}
        />
    );
};
