'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import './Splash.scss';

/**
* Splash() - Class for the splash component.
*/
class Splash extends Component {
  render() {
    return (
      <div className="splash-content-container container">
      <div className="animate__animated animate__flipInX">
      <h1 id="splash-heading">{this.props.title}</h1>
      </div>
      <div className="splash-arrow-wrapper animate__animated animate__backInUp animate__slow">
      <span className="splash-down-arrow"></span>
      </div>
      </div>
    );
  }
}

export default Splash;
