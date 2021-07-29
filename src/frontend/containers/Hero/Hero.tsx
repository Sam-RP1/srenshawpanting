import React from 'react';

import { Hero as HeroCmpnt } from '../../components/Hero/Hero';

import { socialIcons } from '../../lib/icons';

export const Hero = (): JSX.Element => {
    return <HeroCmpnt socials={socialIcons} />;
};
