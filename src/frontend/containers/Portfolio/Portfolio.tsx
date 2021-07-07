import React from 'react';

import { githubIcon, externalLinkIcon, rightChevronIcon } from '../../lib/icons';

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
    const professionalItems = [
        {
            id: 'deduction',
            title: 'Deduction',
            created: '2020',
            shortTaster: 'Multiplayer web game',
            taster: 'A real-time multiplayer web game in which two teams face off to get their score to zero first',
            tags: ['scss', 'react', 'redux', 'nodejs', 'express', 'socket-io', 'mysql'],
            description: '',
            buttons: [
                {
                    id: 'deduction-more-btn',
                    url: '#',
                    icon: rightChevronIcon,
                    label: 'Learn more',
                },
                {
                    id: 'deduction-github-btn',
                    url: 'https://github.com/Sam-RP1/deduction',
                    icon: githubIcon,
                    label: 'Open repo',
                },
                {
                    id: 'deduction-visit-btn',
                    url: 'http://www.thedeductiongame.com/',
                    icon: externalLinkIcon,
                    label: 'Open site',
                },
            ],
            img: deductionPrev,
        },
        {
            id: 'letterdetonator',
            title: 'Letter Detonator',
            created: '2020',
            shortTaster: 'Web game',
            taster: 'A web game where players type to survive the endless waves of letters',
            tags: ['html', 'canvas', 'scss', 'javascript', 'react', 'local-storage'],
            description: '',
            buttons: [
                {
                    id: 'letterdetonator-more-btn',
                    url: '#',
                    icon: rightChevronIcon,
                    label: 'Learn more',
                },
                {
                    id: 'letterdetonator-github-btn',
                    url: 'https://github.com/Sam-RP1/letter-detonator',
                    icon: githubIcon,
                    label: 'Open repo',
                },
                {
                    id: 'letterdetonator-visit-btn',
                    url: 'http://letterdetonator.co.uk/',
                    icon: externalLinkIcon,
                    label: 'Open site',
                },
            ],
            img: letterDetonatorPrev,
        },
        {
            id: 'karensbeautybox',
            title: 'Karens Beauty Box',
            created: '2020',
            shortTaster: 'Single-page website',
            taster: 'A single-page website with a minimalistic design featuring bespoke icons and a logo',
            tags: ['html', 'scss', 'react'],
            description: '',
            buttons: [
                {
                    id: 'karensbeautybox-more-btn',
                    url: '#',
                    icon: rightChevronIcon,
                    label: 'Learn more',
                },
                {
                    id: 'karensbeautybox-visit-btn',
                    url: 'http://karensbeautybox.co.uk/',
                    icon: externalLinkIcon,
                    label: 'Open site',
                },
            ],
            img: karensBeautyBoxPrev,
        },
        {
            id: 'peerreviewportal',
            title: 'Peer Review Portal',
            created: '2019',
            shortTaster: 'Web application',
            taster: 'A web application that streamlines and enhances the peer review and meta review processes',
            tags: [
                'css',
                'javascript',
                'react',
                'nodejs',
                'express',
                'express-session',
                'google-auth',
                'mysql',
                'multer',
            ],
            description: '',
            buttons: [
                {
                    id: 'peerreviewportal-more-btn',
                    url: '#',
                    icon: rightChevronIcon,
                    label: 'Learn more',
                },
                {
                    id: 'peerreviewportal-report-btn',
                    url: '#',
                    icon: externalLinkIcon,
                    label: 'Open report',
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
            shortTaster: 'Web application',
            taster: 'A web application that allows for the full creation, customisation and management of a network of unattended displays',
            tags: ['html', 'css', 'javascript', 'nodejs', 'express', 'multer', 'mysql'],
            description: '',
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
                    icon: rightChevronIcon,
                    label: 'Learn more',
                },
            ],
            img: pudhubPrev,
        },
        {
            id: 'robotics',
            title: 'Robotics',
            created: '2019',
            shortTaster: 'V-REP Simulation',
            taster: 'A project aiming to improve the performance of a mobile robot`s object manipulation and colour based sorting',
            tags: ['lua-script', 'v-rep'],
            description: '',
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
                    icon: rightChevronIcon,
                    label: 'Learn more',
                },
            ],
            img: roboticsPrev,
        },
        {
            id: 'distributedsystems',
            title: 'Distributed Systems',
            created: '2019',
            shortTaster: 'Research Paper',
            taster: 'A paper researching and evaluting the suitability of different methods to detect and mitigate DDOS attacks in IoT temperature sensing devices',
            tags: ['ddos', 'iot', 'nodejs', 'raspberry-pi', 'computer-cluster', 'research'],
            buttons: [
                {
                    id: 'distibutedsystems-report-btn',
                    url: '#',
                    icon: rightChevronIcon,
                    label: 'Open research',
                },
            ],
            img: distPrev,
        },
        {
            id: 'literaturereview',
            title: 'Mitigating Data Exposure',
            created: '2017',
            shortTaster: 'Literature Review',
            taster: 'A literature review exploring the topic of Mitigating Corporate Information Exposure on the Web',
            tags: ['byod', 'info-exposure', 'literature-review'],
            buttons: [
                {
                    id: 'literaturereview-report-btn',
                    url: '#',
                    icon: rightChevronIcon,
                    label: 'Open review',
                },
            ],
            img: litrevPrev,
        },
    ];

    return <PortfolioCmpnt professionalItems={professionalItems} academicItems={academicItems} />;
};
