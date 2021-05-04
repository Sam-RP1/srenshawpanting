import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Portfolio as PortfolioCmpnt } from '../../components/Portfolio/Portfolio';

// eslint-disable-next-line
const deductionPrev = require('../../assets/portfolio/deduction/img/deduction-min.png');
// eslint-disable-next-line
const letterDetonatorPrev = require('../../assets/portfolio/letter-detonator/img/letter-detonator-min.png');
// eslint-disable-next-line
const karensBeautyBoxPrev = require('../../assets/portfolio/karensbeautybox/img/karensbeautybox-min.png');
// eslint-disable-next-line
const peerReviewPortalPrev = require('../../assets/portfolio/peer-review-portal/img/prp-min.png');

export const Portfolio = (): JSX.Element => {
    const gitHubIcon = <FontAwesomeIcon icon={faGithub} />;
    const externalLinkIcon = <FontAwesomeIcon icon={faExternalLinkSquareAlt} />;
    const learnMoreIcon = <FontAwesomeIcon icon={faAngleDoubleRight} />;

    const professionalItems = [
        {
            id: 'deduction',
            title: 'Deduction',
            created: '2020',
            description: 'Multiplayer web game',
            buttons: [
                // {
                //     id: 'deduction-visit-btn',
                //     url: 'http://www.thedeductiongame.com/',
                //     icon: externalLinkIcon,
                //     label: 'Visit Deduction',
                // },
                // {
                //     id: 'deduction-github-btn',
                //     url: 'https://github.com/Sam-RP1/deduction',
                //     icon: gitHubIcon,
                //     label: 'View on GitHub',
                // },
                {
                    id: 'deduction-more-btn',
                    url: '#',
                    icon: learnMoreIcon,
                    label: 'Learn More',
                },
            ],
            img: deductionPrev,
        },
        {
            id: 'letterdetonator',
            title: 'Letter Detonator',
            created: '2020',
            description: 'Web game',
            buttons: [
                // {
                //     id: 'letterdetonator-visit-btn',
                //     url: 'http://letterdetonator.co.uk/',
                //     icon: externalLinkIcon,
                //     label: 'Visit Letter Detonator',
                // },
                // {
                //     id: 'letterdetonator-github-btn',
                //     url: 'https://github.com/Sam-RP1/letter-detonator',
                //     icon: gitHubIcon,
                //     label: 'View on GitHub',
                // },
                {
                    id: 'letterdetonator-more-btn',
                    url: '#',
                    icon: learnMoreIcon,
                    label: 'Learn More',
                },
            ],
            img: letterDetonatorPrev,
        },
        {
            id: 'karensbeautybox',
            title: 'Karens Beauty Box',
            created: '2020',
            description: 'Client Website',
            buttons: [
                // {
                //     id: 'karensbeautybox-visit-btn',
                //     url: 'http://karensbeautybox.co.uk/',
                //     icon: externalLinkIcon,
                //     label: 'Visit Karens Beauty Box',
                // },
                {
                    id: 'karensbeautybox-more-btn',
                    url: '#',
                    icon: learnMoreIcon,
                    label: 'Learn More',
                },
            ],
            img: karensBeautyBoxPrev,
        },
        {
            id: 'peerreviewportal',
            title: 'Peer Review Portal',
            created: '2019',
            description: 'Web application',
            buttons: [
                // {
                //     id: 'peerreviewportal-report-btn',
                //     url: '#',
                //     icon: externalLinkIcon,
                //     label: 'View Report',
                // },
                {
                    id: 'peerreviewportal-more-btn',
                    url: '#',
                    icon: learnMoreIcon,
                    label: 'Learn More',
                },
            ],
            img: peerReviewPortalPrev,
        },
    ];

    const academicItems = [
        {
            id: 'robotics',
            title: 'Robotics',
            created: '2019',
            description: 'V-REP Simulation',
            buttons: [
                // {
                //     id: 'robotics-report-btn',
                //     url: '#',
                //     icon: externalLinkIcon,
                //     label: 'View Report',
                // },
                // {
                //     id: 'robotics-github-btn',
                //     url: '#',
                //     icon: gitHubIcon,
                //     label: 'View on GitHub',
                // },
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
            description: 'Web application',
            techStack: 'Built using HTML, CSS, JS, Express and MariaDB.',
            buttons: [
                // {
                //     id: 'pudhub-github-btn',
                //     url: '#',
                //     icon: gitHubIcon,
                //     label: 'View on GitHub',
                // },
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
            description: 'Research Paper',
            techStack: 'Experiment conducted using Node.js, Raspberry Pi 3B+ and a Computer Cluster (7 Nodes).',
            buttons: [
                {
                    id: 'distibutedsystems-report-btn',
                    url: '#',
                    icon: learnMoreIcon,
                    label: 'View Research',
                },
            ],
        },
        {
            id: 'literaturereview',
            title: 'Mitigating Data Exposure',
            created: '2017',
            description: 'Literature Review',
            techStack: '',
            buttons: [
                {
                    id: 'literaturereview-report-btn',
                    url: '#',
                    icon: learnMoreIcon,
                    label: 'View Literature Review',
                },
            ],
        },
    ];

    return <PortfolioCmpnt professionalItems={professionalItems} academicItems={academicItems} />;
};
