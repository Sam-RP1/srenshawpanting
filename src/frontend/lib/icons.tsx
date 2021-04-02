import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKing, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { Icons } from './interfaces';

export const icons: Icons = [
    {
        id: 'github',
        url: 'https://github.com/Sam-RP1',
        icon: <FontAwesomeIcon icon={faGithub} />,
        tooltip: 'GitHub',
    },
    {
        id: 'linkedin',
        url: 'https://www.linkedin.com/in/samuel-renshaw-panting/',
        icon: <FontAwesomeIcon icon={faLinkedinIn} />,
        tooltip: 'LinkedIn',
    },
    {
        id: 'youtube',
        url: 'https://www.youtube.com/user/TheWarpCentral',
        icon: <FontAwesomeIcon icon={faYoutube} />,
        tooltip: 'YouTube',
    },
    {
        id: 'instagram',
        url: 'https://www.instagram.com/sxm_rp/',
        icon: <FontAwesomeIcon icon={faInstagram} />,
        tooltip: 'Instagram',
    },
    {
        id: 'chess',
        url: 'https://www.chess.com/member/samuelr-p',
        icon: <FontAwesomeIcon icon={faChessKing} />,
        tooltip: 'Chess.com',
    },
    {
        id: 'buymeacoffee',
        url: 'https://www.buymeacoffee.com/samrp',
        icon: <FontAwesomeIcon icon={faMugHot} />,
        tooltip: 'BuyMeACoffee',
    },
];
