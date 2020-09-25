'use strict';

import React from 'react';

import Grid from '../ui/Grid';

import '../../styles/root.scss';
import './Options.scss';

import portfolioIcon from '../../assets/icons/portfolio-min.png';
import servicesIcon from '../../assets/icons/services-min.png';
import contactIcon from '../../assets/icons/contact-min.png';

/**
* Options - The Options component.
*/
const Options = () => {
  const iconsData = [
    {
      id: "portfolio",
      href: "portfolio.html",
      src: portfolioIcon,
      alt: "Portfolio button",
      title: "Portfolio"
    },
    {
      id: "services",
      href: "services.html",
      src: servicesIcon,
      alt: "Services button",
      title: "Services"
    },
    {
      id: "contact",
      href: "contact.html",
      src: contactIcon,
      alt: "Contact button",
      title: "Contact"
    },
  ];

  return (
    <section id="options" className="section-default h-auto padding-6016">
    <Grid tiles={iconsData} divide={true} class={"space-between container"} />
    </section>
  )
};

export default Options;
