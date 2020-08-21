'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../../styles/root.scss';
import '../../../styles/splash.scss';

/**
* SplashIndex() - Class for the splash component that is used specifically on the index page.
*/
class SplashIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "SRP Designs",
      message: "Bespoke, professional & modern design solutions.",
    };

    this.counter = 0;
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.infoFadeOut(),
      6000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  infoFadeOut() {
    const heading = document.getElementById('splash-heading');
    const msg = document.getElementById('splash-msg');
    heading.style.opacity = '0';
    msg.style.opacity = '0';

    this.counter += 1;

    this.timeoutID = setTimeout(
      () => this.infoFadeIn(),
      2000
    );
  }

  infoFadeIn() {
    if (this.counter % 2 == 0) {
      this.setState({
        title: "SRP Designs",
        message: "Bespoke, professional & modern design solutions.",
      });
    } else {
      this.setState({
        title: "Sam Renshaw-Panting",
        message: "Software Engineering Graduate.",
      });
    }

    const heading = document.getElementById('splash-heading');
    const msg = document.getElementById('splash-msg');
    heading.style.opacity = '1';
    msg.style.opacity = '1';
  }

  render() {
    return (
      <div className="splash-content-container container">
      <div className="animate__animated animate__backInLeft animate__slow">
      <h1 id="splash-heading">{this.state.title}</h1>
      <p id="splash-msg">{this.state.message}</p>
      </div>
      <div className="splash-arrow-wrapper animate__animated animate__backInUp animate__slow">
      <span className="splash-down-arrow"></span>
      </div>
      </div>
    );
  }
}

export default SplashIndex;
