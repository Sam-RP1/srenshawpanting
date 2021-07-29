import React from 'react';

import { Footer as FooterCmpnt } from '../../components/Footer/Footer';

import { footerIcons } from '../../lib/icons';

export const Footer = (): JSX.Element => {
    const links = [
        {
            id: '.section--about',
            label: 'About',
        },
        {
            id: '.section--portfolio',
            label: 'Portfolio',
        },
        {
            id: '.section--lab',
            label: 'Lab',
        },
        {
            id: '.section--connect',
            label: 'Connect',
        },
    ];

    return <FooterCmpnt links={links} icons={footerIcons} />;
};
