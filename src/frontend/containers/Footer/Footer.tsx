import React from 'react';

import { Footer as FooterCmpnt } from '../../components/Footer/Footer';

import { footerIcons } from '../../lib/icons';
import { links } from '../../lib/links';

export const Footer = (): JSX.Element => {
    return <FooterCmpnt links={links} icons={footerIcons} />;
};
