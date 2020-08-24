'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';

/**
* FooterLinks - Contains the footer links component for the Footer component.
*/
class FooterLinks extends Component {
  render() {
    let links = this.props.links.map((link, i) => {
      return (
        <React.Fragment key={i}>
        <li>|</li>
        <li><a href={link.href}>{link.title}</a></li>
        </React.Fragment>
      )
    });

    return (
      <ul className="footer-link-container">
      {links}
      <li>|</li>
      </ul>
    );
  }
};

export default FooterLinks;
