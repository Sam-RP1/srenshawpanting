'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../../styles/root.scss';
import '../../../styles/portfolio.scss';

let counter = 0;

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: props.items,
      aos: [ ["fade-right", "fade-up", "fade-left"], ["fade-left", "fade-up", "fade-right"], ["fade-down", "fade-down", "fade"] ],
    };
  }

  handleTab(id) {
    const elem = document.getElementById(id);
    elem.parentNode.classList.toggle('active');
  }

  render() {
    console.log(this.state.array)
    return (
      <div className="portfolio-gallery-container container">
      {this.state.array.map((id, i) =>
        <div key={i.toString()} className="gallery-item-container">
        <div id={this.state.array[i].id} className="gallery-item-inner">

        <section className="gallery-item-front">
        <a href={this.state.array[i].url} target={this.state.array[i].url.substr(0, 5) === "/port" ? "" : "_blank"}></a>
        <div className="gallery-item-tab-btn" onClick={() => this.handleTab(this.state.array[i].id)}>
        <span></span>
        <h2>{this.state.array[i].title}</h2>
        </div>
        </section>

        <section className="gallery-item-back">
        <article className="gallery-item-info">
        <p>HELLO</p>
        </article>
        </section>

        </div>
        </div>
      )}
      </div>
    );
  }
}

export default Portfolio;
