import React from 'react';

import { Header as HeaderCmpnt } from '../../components/Header/Header';

import { socialIcons } from '../../lib/icons';

export const Header = (): JSX.Element => {
    return <HeaderCmpnt socials={socialIcons} />;
};
