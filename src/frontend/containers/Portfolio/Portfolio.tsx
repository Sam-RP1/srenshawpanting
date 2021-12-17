import React from 'react';

import { Portfolio as PortfolioCmpnt } from '../../components/Portfolio/Portfolio';

import { projectsData } from '../../assets/projects/index';

export const Portfolio = (): JSX.Element => {
    return <PortfolioCmpnt portfolioContent={projectsData} />;
};
