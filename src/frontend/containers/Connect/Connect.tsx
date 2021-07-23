import React from 'react';

import { Connect as ConnectCmpnt } from '../../components/Connect/Connect';

import { githubIcon, codepenIcon, linkedinIcon, flickrIcon, chessIcon, fileIcon } from '../../lib/icons';

export const Connect = (): JSX.Element => {
    const icons = [githubIcon, codepenIcon, linkedinIcon, fileIcon, flickrIcon, chessIcon];
    return <ConnectCmpnt icons={icons} />;
};
