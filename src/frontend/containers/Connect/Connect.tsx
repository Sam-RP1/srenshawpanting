import React from 'react';

import { Connect as ConnectCmpnt } from '../../components/Connect/Connect';

import {
    githubIcon,
    codepenIcon,
    linkedinIcon,
    instagramIcon,
    youtubeIcon,
    flickrIcon,
    chessIcon,
    fileIcon,
} from '../../lib/icons';

export const Connect = (): JSX.Element => {
    const icons = [githubIcon, codepenIcon, linkedinIcon, instagramIcon, youtubeIcon, flickrIcon, chessIcon, fileIcon];
    return <ConnectCmpnt icons={icons} />;
};
