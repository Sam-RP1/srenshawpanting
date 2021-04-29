import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faUserCircle, faFileAlt, faPlug, faMeteor } from '@fortawesome/free-solid-svg-icons';

import { Home as HomeCmpnt } from '../../components/Home/Home';

export const Home = (): JSX.Element => {
    const arrowsIcon = <FontAwesomeIcon icon={faAngleDoubleRight} />;

    const sitePages = [
        {
            icon: <FontAwesomeIcon icon={faUserCircle} />,
            id: 'about',
            megaTitle: 'About',
            title: 'About',
            route: '/about',
        },
        {
            icon: <FontAwesomeIcon icon={faMeteor} />,
            id: 'portfolio',
            megaTitle: 'Portfolio',
            title: 'Portfolio',
            route: '/portfolio',
        },
        {
            icon: <FontAwesomeIcon icon={faFileAlt} />,
            id: 'cv',
            megaTitle: 'Curriculum Vitae',
            title: 'CV',
            route: '/cv',
        },
        {
            icon: <FontAwesomeIcon icon={faPlug} />,
            id: 'connect',
            megaTitle: 'Connect',
            title: 'Connect',
            route: '/connect',
        },
    ];

    return <HomeCmpnt sitePages={sitePages} arrowsIcon={arrowsIcon} />;
};
