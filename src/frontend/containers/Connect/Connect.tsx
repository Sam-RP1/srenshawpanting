import React from 'react';

import { Connect as ConnectCmpnt } from '../../components/Connect/Connect';

import { socialIcons } from '../../lib/icons';

// type ConnectProps = {};

export const Connect = (): JSX.Element => {
    return <ConnectCmpnt icons={socialIcons} />;
};
