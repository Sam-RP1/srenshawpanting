import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Portfolio as PortfolioCmpnt } from '../../components/Portfolio/Portfolio';

export const Portfolio = (): JSX.Element => {
    const gitHubIcon = <FontAwesomeIcon icon={faGithub} />;
    const externalLinkIcon = <FontAwesomeIcon icon={faExternalLinkSquareAlt} />;
    const learnMoreIcon = <FontAwesomeIcon icon={faAngleDoubleRight} />;

    const professionalItems = [
        {
            id: 'deduction',
            title: 'Deduction',
            created: '2020',
            description:
                'Deduction is a real-time multiplayer web game in which players are split into two teams and face off against each other!',
            techStack: 'Built using React, Redux, SCSS, Express, Socket.io, MariaDB, Webpack and hosted using AWS.',
            buttons: [
                {
                    id: 'deduction-visit-btn',
                    url: 'http://www.thedeductiongame.com/',
                    icon: externalLinkIcon,
                    label: 'Visit Deduction',
                },
                {
                    id: 'deduction-github-btn',
                    url: 'https://github.com/Sam-RP1/deduction',
                    icon: gitHubIcon,
                    label: 'View on GitHub',
                },
                {
                    id: 'deduction-more-btn',
                    url: '#',
                    icon: learnMoreIcon,
                    label: 'Learn More',
                },
            ],
        },
        {
            id: 'letterdetonator',
            title: 'Letter Detonator',
            created: '2020',
            description:
                'Letter Detonator, a web game where players type to survive. Players achieve high scores by typing out the approaching letters causing them to detonate and explode.',
            techStack: 'Built using HTML Canvas, SCSS, JS, React, Local Storage, Webpack and hosted using AWS.',
            buttons: [
                {
                    id: 'letterdetonator-visit-btn',
                    url: 'http://letterdetonator.co.uk/',
                    icon: externalLinkIcon,
                    label: 'Visit Letter Detonator',
                },
                {
                    id: 'letterdetonator-github-btn',
                    url: 'https://github.com/Sam-RP1/letter-detonator',
                    icon: gitHubIcon,
                    label: 'View on GitHub',
                },
                {
                    id: 'letterdetonator-more-btn',
                    url: '#',
                    icon: learnMoreIcon,
                    label: 'Learn More',
                },
            ],
        },
        {
            id: 'karensbeautybox',
            title: 'Karens Beauty Box',
            created: '2020',
            description:
                'Karens Beauty Box is a single-page website with a refined design that features a moving gradient background alongside bespoke minimalistic icons and a logo.',
            techStack: 'HTML, SCSS, JS, React, Webpack and hosted using AWS.',
            buttons: [
                {
                    id: 'karensbeautybox-visit-btn',
                    url: 'http://karensbeautybox.co.uk/',
                    icon: externalLinkIcon,
                    label: 'Visit Karens Beauty Box',
                },
                {
                    id: 'karensbeautybox-more-btn',
                    url: '#',
                    icon: learnMoreIcon,
                    label: 'Learn More',
                },
            ],
        },
        {
            id: 'peerreviewportal',
            title: 'Peer Review Portal',
            created: '2019',
            description:
                'Peer Review Portal is a web application that streamlines and improves the peer and meta review process. It encompasses the setting, collecting and meta-reviewing of work for assignments by teachers and the submitting, peer-reviewing of work and accessing of feedback for assignments by students.',
            techStack: 'Built using JSX, CSS, React, Babel, Express and MariaDB.',
            buttons: [
                {
                    id: 'peerreviewportal-report-btn',
                    url: '#',
                    icon: externalLinkIcon,
                    label: 'View Report',
                },
                {
                    id: 'peerreviewportal-more-btn',
                    url: '#',
                    icon: learnMoreIcon,
                    label: 'Learn More',
                },
            ],
        },
    ];

    const academicItems = [
        {
            id: 'robotics',
            title: 'Robotics',
            created: '2019',
            description:
                'A project with the aim to improve the performance of a mobile robot`s object manipulation and sorting, based on colour, in a simulated scenario of an industrial environment.',
            techStack: 'Created using V-REP, Lua Script and Kuka YouBot.',
            buttons: [
                {
                    id: 'robotics-report-btn',
                    url: '#',
                    icon: externalLinkIcon,
                    label: 'View Report',
                },
                {
                    id: 'robotics-github-btn',
                    url: '#',
                    icon: gitHubIcon,
                    label: 'View on GitHub',
                },
                {
                    id: 'robotics-more-btn',
                    url: '#',
                    icon: learnMoreIcon,
                    label: 'Learn More',
                },
            ],
        },
        {
            id: 'pudhub',
            title: 'P.U.D Hub',
            created: '2018',
            description:
                'Portsmouth Unattended Displays (P.U.D) Hub is a web application that allows for the full creation, customisation and management of a network of unattended displays from a single dashboard.',
            techStack: 'Built using HTML, CSS, JS, Express and MariaDB.',
            buttons: [
                {
                    id: 'pudhub-github-btn',
                    url: '#',
                    icon: gitHubIcon,
                    label: 'View on GitHub',
                },
                {
                    id: 'pudhub-more-btn',
                    url: '#',
                    icon: learnMoreIcon,
                    label: 'Learn More',
                },
            ],
        },
        {
            id: 'distibutedsystems',
            title: 'Distributed Systems',
            created: '2019',
            description:
                'A paper in which methods to detect and mitigate DDOS attacks are researched, compared and evaluated for their suitability to be used by IoT temperature sensing devices as a DDOS security mechanism.',
            techStack: 'Experiment conducted using Node.js, Raspberry Pi 3B+ and a Computer Cluster (7 Nodes).',
            buttons: [
                {
                    id: 'distibutedsystems-report-btn',
                    url: '#',
                    icon: externalLinkIcon,
                    label: 'View Research',
                },
            ],
        },
        {
            id: 'literaturereview',
            title: 'Mitigating Data Exposure',
            created: '2017',
            description:
                'A literature review exploring the topic of Mitigating Corporate Information Exposure on the Web with a specific focus on Bring Your Own Device.',
            techStack: '',
            buttons: [
                {
                    id: 'literaturereview-report-btn',
                    url: '#',
                    icon: externalLinkIcon,
                    label: 'View Literature Review',
                },
            ],
        },
    ];

    return <PortfolioCmpnt professionalItems={professionalItems} academicItems={academicItems} />;
};
