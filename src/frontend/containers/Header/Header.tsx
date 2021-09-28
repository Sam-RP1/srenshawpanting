import React from 'react';

import { Header as HeaderCmpnt } from '../../components/Header/Header';

import { socialIcons } from '../../lib/icons';

type HeaderProps = {
    btns: string[];
};

export const Header = ({ btns }: HeaderProps): JSX.Element => {
    return <HeaderCmpnt btns={btns} socials={socialIcons} />;
};
