'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../../styles/root.scss';
import '../../../styles/portfolio.scss';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: props.items,
      bgColour: ["bg-black", "bg-white"],
      contentColour: ["content-white", "content-black"],
      alignment: ["align-left", "align-right", "align-center"],
      sizing: [ ["wrapper-60", "wrapper-40"], ["wrapper-60", "wrapper-40"], ["wrapper-100", "wrapper-40"] ],
      aos: [ ["fade-right", "fade-up", "fade-left"], ["fade-left", "fade-up", "fade-right"], ["fade-down", "fade-down", "fade"] ],
    };
  }


  render() {
    return (
      <React.Fragment>
      {this.state.array.map((id, i) =>
        <section key={i.toString()} className={"section-default h-auto padding-6016 " + this.state.bgColour[i % 2]}>
        <div className={"container portfolio-item-container " + this.state.contentColour[i % 2] + " " + this.state.alignment[i % 3]}>
        <article className={"txt-wrapper " + this.state.sizing[i % 3][0]}>
        <h1 data-aos={this.state.aos[i % 3][0]}>{this.state.array[i].title}</h1>
        <h3 data-aos={this.state.aos[i % 3][0]}>{this.state.array[i].purpose}</h3>
        <p data-aos={this.state.aos[i % 3][1]}>{this.state.array[i].description}</p>
        </article>
        <div id={this.state.array[i].id} className={"portfolio-img bg-white " + this.state.sizing[i % 3][0]} data-aos={this.state.aos[i % 3][2]}>
        <div className="blur"></div>
        <a href={this.state.array[i].url} target={this.state.array[i].url.substr(0, 5) === "/port" ? "" : "_blank"}>
        <button className="portfolio-btn">{this.state.array[i].button}
        <span className="btn-arrow">&#8618;</span>
        </button>
        </a>
        </div>
        </div>
        </section>
      )}
      </React.Fragment>
    );
  }
}

export default Portfolio;
