import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Portfolio as PortfolioCmpnt } from '../../components/Portfolio/Portfolio';

// Load images lazily from server side when deployed, create a spinner for loading
// eslint-disable-next-line
const deductionPrev = require('../../assets/portfolio/deduction/img/deduction-min.png');
// eslint-disable-next-line
const letterDetonatorPrev = require('../../assets/portfolio/letter-detonator/img/letter-detonator-min.png');
// eslint-disable-next-line
const karensBeautyBoxPrev = require('../../assets/portfolio/karensbeautybox/img/karensbeautybox-min.png');
// eslint-disable-next-line
const peerReviewPortalPrev = require('../../assets/portfolio/peer-review-portal/img/prp-min.png');
// eslint-disable-next-line
const roboticsPrev = require('../../assets/portfolio/robotics/img/robotics.png');
// eslint-disable-next-line
const pudhubPrev = require('../../assets/portfolio/portsmouth-unattended-displays/img/pud-min.png');
// eslint-disable-next-line
const distPrev = require('../../assets/portfolio/distributed-systems/img/dss-min.png');
// eslint-disable-next-line
const litrevPrev = require('../../assets/portfolio/literature-review/img/litrev-min.png');

export const Portfolio = (): JSX.Element => {
    const gitHubIcon = <FontAwesomeIcon icon={faGithub} />;
    const externalLinkIcon = <FontAwesomeIcon icon={faExternalLinkSquareAlt} />;
    const learnMoreIcon = <FontAwesomeIcon icon={faAngleDoubleRight} />;

    const professionalItems = [
        {
            id: 'deduction',
            title: 'Deduction',
            created: '2020',
            tag: 'Multiplayer web game',
            taster: 'A real-time multiplayer web game in which two teams face off to get their score to zero first',
            description: '',
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
            tag: 'Web game',
            taster: 'A web game where players type to survive the endless waves of letters',
            description: '',
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
            tag: 'Single-page Website',
            taster: 'A single-page website with a minimalistic design featuring bespoke icons and a logo',
            description: '',
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
            tag: 'Web application',
            taster: 'A web application that streamlines and enhances the peer review and meta review processes',
            description: '',
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
            id: 'pudhub',
            title: 'P.U.D Hub',
            created: '2018',
            tag: 'Web application',
            taster: 'A web application that allows for the full creation, customisation and management of a network of unattended displays',
            description: '',
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
            img: pudhubPrev,
        },
        {
            id: 'robotics',
            title: 'Robotics',
            created: '2019',
            tag: 'V-REP Simulation',
            taster: 'A project aiming to improve the performance of a mobile robot`s object manipulation and colour based sorting',
            description: '',
            techStack: '',
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
            img: roboticsPrev,
        },

        {
            id: 'distributedsystems',
            title: 'Distributed Systems',
            created: '2019',
            tag: 'Research Paper',
            taster: 'A paper researching and evaluting the suitability of different methods to detect and mitigate DDOS attacks in IoT temperature sensing devices',
            techStack: 'Experiment conducted using Node.js, Raspberry Pi 3B+ and a Computer Cluster (7 Nodes).',
            buttons: [
                {
                    id: 'distibutedsystems-report-btn',
                    url: '#',
                    icon: learnMoreIcon,
                    label: 'View Research',
                },
            ],
            img: distPrev,
        },
        {
            id: 'literaturereview',
            title: 'Mitigating Data Exposure',
            created: '2017',
            tag: 'Literature Review',
            taster: 'A literature review exploring the topic of Mitigating Corporate Information Exposure on the Web',
            techStack: '',
            buttons: [
                {
                    id: 'literaturereview-report-btn',
                    url: '#',
                    icon: learnMoreIcon,
                    label: 'View Literature Review',
                },
            ],
            img: litrevPrev,
        },
    ];

    return <PortfolioCmpnt professionalItems={professionalItems} academicItems={academicItems} />;
};
