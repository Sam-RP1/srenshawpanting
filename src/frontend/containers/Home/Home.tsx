import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faUserCircle, faFileAlt, faPlug, faMeteor } from '@fortawesome/free-solid-svg-icons';

import { Home as HomeCmpnt } from '../../components/Home/Home';

export const Home = (): JSX.Element => {
    const learnMoreIcon = <FontAwesomeIcon icon={faAngleDoubleRight} />;

    const sitePages = [
        {
            hero: <FontAwesomeIcon icon={faUserCircle} />,
            id: 'about',
            megaTitle: 'About',
            title: 'About',
            route: '/about',
            buttons: [
                {
                    id: 'about-more-btn',
                    icon: learnMoreIcon,
                },
            ],
        },
        {
            hero: <FontAwesomeIcon icon={faMeteor} />,
            id: 'portfolio',
            megaTitle: 'Portfolio',
            title: 'Portfolio',
            route: '/portfolio',
            buttons: [
                {
                    id: 'portfolio-more-btn',
                    icon: learnMoreIcon,
                },
            ],
        },
        {
            hero: <FontAwesomeIcon icon={faFileAlt} />,
            id: 'cv',
            megaTitle: 'Curriculum Vitae',
            title: 'CV',
            route: '/cv',
            buttons: [
                {
                    id: 'cv-more-btn',
                    icon: learnMoreIcon,
                },
            ],
        },
        {
            hero: <FontAwesomeIcon icon={faPlug} />,
            id: 'connect',
            megaTitle: 'Connect',
            title: 'Connect',
            route: '/connect',
            buttons: [
                {
                    id: 'connect-more-btn',
                    icon: learnMoreIcon,
                },
            ],
        },
    ];

    return <HomeCmpnt sitePages={sitePages} />;
};
