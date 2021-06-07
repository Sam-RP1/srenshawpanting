import React from 'react';

import { Links } from './interfaces';

export const links: Links = [
    {
        id: 'about',
        url: <div key={'about-link'}>About</div>,
    },
    {
        id: 'portfolio',
        url: <div key={'portfolio-link'}>Portfolio</div>,
    },
    {
        id: 'cv',
        url: <div key={'cv-link'}>CV</div>,
    },
    {
        id: 'connect',
        url: <div key={'connect-link'}>Connect</div>,
    },
];
