import React from 'react';
import { NavLink } from 'react-router-dom';

import { Links } from './interfaces';

export const links: Links = [
    {
        id: 'about',
        url: (
            <NavLink key={'about-link'} to='/about'>
                About
            </NavLink>
        ),
    },
    {
        id: 'portfolio',
        url: (
            <NavLink key={'portfolio-link'} to='/portfolio'>
                Portfolio
            </NavLink>
        ),
    },
    {
        id: 'cv',
        url: (
            <NavLink key={'cv-link'} to='/cv'>
                CV
            </NavLink>
        ),
    },
    {
        id: 'connect',
        url: (
            <NavLink key={'connect-link'} to='/connect'>
                Connect
            </NavLink>
        ),
    },
];
