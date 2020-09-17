'use strict';

import React from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import './Options.scss';

import portfolioIcon from '../../assets/icons/portfolio.png';
import servicesIcon from '../../assets/icons/services.png';
import contactIcon from '../../assets/icons/contact.png';

/**
* Options - The Options component.
*/
const Options = () => {
  const iconsData = [
    {
      id: "portfolio",
      href: "portfolio.html",
      src: portfolioIcon,
      alt: "Portfolio",
      title: "Portfolio"
    },
    {
      id: "services",
      href: "services.html",
      src: servicesIcon,
      alt: "Services",
      title: "Services"
    },
    {
      id: "contact",
      href: "contact.html",
      src: contactIcon,
      alt: "Contact",
      title: "Contact"
    }
  ];
  const aos_delay = ["0", "100", "200"];

  let icons = iconsData.map((icon, i) => {
    return (
      <div key={icon.id} id={icon.id} className="grid-square" data-aos="fade-up" data-aos-delay={aos_delay[i]}>
      <a href={icon.href}>
      <img src={icon.src} alt={icon.alt}></img>
      <h2>{icon.title}</h2>
      </a>
      </div>
    )
  });

  return (
    <section id="options" className="section-default h-auto padding-6016">
    <div className="options-container container">
    {icons}
    </div>
    </section>
  )
};

export default Options;
