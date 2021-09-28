import React from 'react';

import { Hero as HeroCmpnt } from '../../components/Hero/Hero';

import { HeroProps } from '../../lib/types';
import { socialIcons } from '../../lib/icons';

export const Hero = ({ title, content, nextItemLabel }: HeroProps): JSX.Element => {
    return <HeroCmpnt title={title} content={content} nextItemLabel={nextItemLabel} socials={socialIcons} />;
};
