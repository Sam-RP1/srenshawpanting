'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';

/**
* AboutIcons - Contains the Icons for the Contact component.
*/
class AboutIcons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aos_data: ["fade-right", "fade-up", "fade-down", "fade-left"],
      aos_delay: ["180", "120", "220", "100"],
    };
  }

  render() {
    let iconRowOne = this.props.icons.rowOne.map((item, i) => {
      return (
        <a key={i} href={item.href} target="_blank" data-aos={this.state.aos_data[i]} data-aos-delay={this.state.aos_delay[i]}>
        <img src={item.src} alt={item.alt}></img>
        </a>
      )
    });

    let iconRowTwo = this.props.icons.rowTwo.map((item, i) => {
      return (
        <a key={i} href={item.href} target="_blank" data-aos={this.state.aos_data[i+2]} data-aos-delay={this.state.aos_delay[i+2]}>
        <img src={item.src} alt={item.alt}></img>
        </a>
      )
    });

    return (
      <div className="about-icons-container">
      <div className="icon-row">
      {iconRowOne}
      </div>
      <div className="icon-row">
      {iconRowTwo}
      </div>
      </div>
    )
  }
}

export default AboutIcons;
