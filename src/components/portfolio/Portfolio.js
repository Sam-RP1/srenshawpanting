'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import './Portfolio.scss';

import { portfolioArr } from './Portfolio-data.js';

/**
* Portfolio - Class for rendering portfolio items on the portfolio page.
*/
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: portfolioArr,
      aos: ["fade-right", "fade-up", "fade-left", "fade-down", "fade-right", "fade-left"],
    };

    this.handleTab = this.handleTab.bind(this);
  }

  handleTab(id) {
    const elem = document.getElementById(id);
    elem.parentNode.classList.toggle('active');
  }

  render() {
    return (
      <div className="portfolio-gallery-container container">
      {this.state.array.map((item, i) =>
        <div key={i} className="gallery-item-container" data-aos={this.state.aos[i % 6]}>
        <div id={item.id} className="gallery-item-inner">
        <section className="gallery-item-front">
        <div className="gallery-item-picture-container">
        <a href={item.url} target={item.url.substr(0, 5) === "/port" ? "" : "_blank"}></a>
        </div>
        <div className="gallery-front-tab" onClick={() => this.handleTab(item.id)}>
        <span></span>
        <h2>{item.title}</h2>
        </div>
        </section>
        <section className="gallery-item-back">
        <article className="gallery-item-info">
        <h2>{item.title}</h2>
        <h3>{item.purpose}</h3>
        <p>{item.description}</p>
        </article>
        <div className="gallery-back-tab">
        <div className="gallery-item-btn" onClick={() => this.handleTab(item.id)}>&#10006; Close</div>
        <a className="gallery-item-btn" href={item.url} target={item.url.substr(0, 5) === "/port" ? "" : "_blank"}>{item.button} &#8618;</a>
        </div>
        </section>
        </div>
        </div>
      )}
      </div>
    );
  }
}

export default Portfolio;
