'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';

/**
* FooterIcons - Contains the footer icons component for the Footer component.
*/
class FooterIcons extends Component {
  render() {
    let icons = this.props.icons.map((icon, i) => {
      return (
        <a key={i} href={icon.href} target="_blank" className={i === this.props.icons.length ? "footer-icon-l" : undefined}>
        <img src={icon.src} alt={icon.alt}></img>
        </a>
      )
    });

    return (
      <React.Fragment>
      <div className="footer-icon-container">{icons}</div>
      <p className="footer-icon-text">Stay Connected</p>
      </React.Fragment>
    );
  }
};

export default FooterIcons;
