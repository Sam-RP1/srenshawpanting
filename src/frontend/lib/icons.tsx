import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChessKing,
    faHandPointer,
    faExternalLinkSquareAlt,
    faAngleLeft,
    faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedinIn,
    faInstagram,
    faGithub,
    faYoutube,
    faCodepen,
    faFlickr,
    faReact,
    faJsSquare,
} from '@fortawesome/free-brands-svg-icons';

import { Icon, Icons } from './interfaces';

export const githubIcon: Icon = {
    id: 'github',
    url: 'https://github.com/Sam-RP1',
    icon: <FontAwesomeIcon icon={faGithub} />,
    tooltip: 'GitHub',
    extension: '/Sam-RP1',
};

export const codepenIcon: Icon = {
    id: 'codepen',
    url: 'https://codepen.io/sam-rp',
    icon: <FontAwesomeIcon icon={faCodepen} />,
    tooltip: 'Codepen',
    extension: '/sam-rp',
};

export const linkedinIcon: Icon = {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/sam-rp/',
    icon: <FontAwesomeIcon icon={faLinkedinIn} />,
    tooltip: 'LinkedIn',
    extension: '/in/sam-rp',
};

export const instagramIcon: Icon = {
    id: 'instagram',
    url: 'https://www.instagram.com/sxm_rp/',
    icon: <FontAwesomeIcon icon={faInstagram} />,
    tooltip: 'Instagram',
    extension: '/sxm_rp',
};

export const youtubeIcon: Icon = {
    id: 'youtube',
    url: 'https://www.youtube.com/c/warpSRP',
    icon: <FontAwesomeIcon icon={faYoutube} />,
    tooltip: 'YouTube',
    extension: '/c/warpSRP',
};

export const flickrIcon: Icon = {
    id: 'flickr',
    url: 'https://www.flickr.com/photos/sam-rp/',
    icon: <FontAwesomeIcon icon={faFlickr} />,
    tooltip: 'flickr',
    extension: '/photos/sam-rp',
};

export const chessIcon: Icon = {
    id: 'chess',
    url: 'https://www.chess.com/member/sam-rp',
    icon: <FontAwesomeIcon icon={faChessKing} />,
    tooltip: 'Chess.com',
    extension: '/member/sam-rp',
};

export const pointerIcon: Icon = {
    id: 'pointer',
    icon: <FontAwesomeIcon icon={faHandPointer} />,
    tooltip: 'Press',
};

export const reactIcon: Icon = {
    id: 'react-icon',
    icon: <FontAwesomeIcon icon={faReact} />,
};

export const jsIcon: Icon = {
    id: 'js-icon',
    icon: <FontAwesomeIcon icon={faJsSquare} />,
};

export const externalLinkIcon: Icon = {
    id: 'externalLink',
    icon: <FontAwesomeIcon icon={faExternalLinkSquareAlt} />,
};

export const leftChevronIcon: Icon = {
    id: 'externalLink',
    icon: <FontAwesomeIcon icon={faAngleLeft} />,
};

export const rightChevronIcon: Icon = {
    id: 'externalLink',
    icon: <FontAwesomeIcon icon={faAngleRight} />,
};

export const socialIcons: Icons = [
    githubIcon,
    codepenIcon,
    linkedinIcon,
    instagramIcon,
    youtubeIcon,
    flickrIcon,
    chessIcon,
];

export const footerIcons: Icons = [githubIcon, codepenIcon, linkedinIcon, instagramIcon, chessIcon];
