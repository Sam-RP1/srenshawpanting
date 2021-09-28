import React from 'react';

import { Portfolio as PortfolioCmpnt } from '../../components/Portfolio/Portfolio';

import { projectsData } from '../../assets/projects/projects';

export const Portfolio = (): JSX.Element => {
    return <PortfolioCmpnt portfolioContent={projectsData} />;
};
