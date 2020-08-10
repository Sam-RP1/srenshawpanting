'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../../styles/root.scss';
import '../../../styles/gallery.scss';

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
        <div className="gallery-item-picture-container">
        <a href={this.state.array[i].url} target={this.state.array[i].url.substr(0, 5) === "/port" ? "" : "_blank"}></a>
        </div>
        <div className="gallery-front-tab" onClick={() => this.handleTab(this.state.array[i].id)}>
        <span></span>
        <h2>{this.state.array[i].title}</h2>
        </div>
        </section>

        <section className="gallery-item-back">
        <article className="gallery-item-info">
        <h2>{this.state.array[i].title}</h2>
        <h3>{this.state.array[i].purpose}</h3>
        <p>{this.state.array[i].description}</p>
        </article>
        <div className="gallery-back-tab">
        <div className="gallery-item-btn" onClick={() => this.handleTab(this.state.array[i].id)}>Close</div>
        <a className="gallery-item-btn" href={this.state.array[i].url} target={this.state.array[i].url.substr(0, 5) === "/port" ? "" : "_blank"}>{this.state.array[i].button}</a>
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
