'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../../styles/root.scss';
import '../../../styles/options.scss';

import portfolioIcon from '../../../assets/icons/portfolio.png';
import servicesIcon from '../../../assets/icons/services.png';
import contactIcon from '../../../assets/icons/contact.png';

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
    return (
      <div className="options-container container">
      {this.state.icons.map((item, i) =>
        <div key={item.id} id={item.id} className="grid-square" data-aos="fade-up" data-aos-delay={this.state.aos_delay[i]}>
        <a href={item.href}>
        <img src={item.src} alt={item.alt}></img>
        <h2>{item.title}</h2>
        </a>
        </div>
      )}
      </div>
    )
  }
};

export default Options;
