'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import './Options.scss';

import portfolioIcon from '../../assets/icons/portfolio.png';
import servicesIcon from '../../assets/icons/services.png';
import contactIcon from '../../assets/icons/contact.png';

/**
* Options - Class for the Options component.
*/
class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: [
        {
          id: "portfolio",
          href: "portfolio.html",
          src: portfolioIcon,
          alt: "Portfolio",
          title: "Portfolio"
        },
        {
          id: "services",
          href: "placeholder.html",
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
      ],
      aos_delay: ["0", "100", "200"]
    };
  }

  render() {
    let icons = this.state.icons.map((icon, i) => {
      return (
        <div key={icon.id} id={icon.id} className="grid-square" data-aos="fade-up" data-aos-delay={this.state.aos_delay[i]}>
        <a href={icon.href}>
        <img src={icon.src} alt={icon.alt}></img>
        <h2>{icon.title}</h2>
        </a>
        </div>
      )
    });

    return (
      <div className="options-container container">
      {icons}
      </div>
    )
  }
};

export default Options;
