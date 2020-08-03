'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../styles/root.scss';
import '../styles/splash.scss';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
    };
  }

  render() {
    return (
      <div className="splash-content-container container">
      <div className="animate__animated animate__backInLeft animate__slow">
      <h1 id="splash-heading">{this.state.title}</h1>
      </div>
      <div className="splash-arrow-wrapper animate__animated animate__backInUp animate__slow">
      <span className="splash-down-arrow"></span>
      </div>
      </div>
    );
  }
}

export default Splash;
