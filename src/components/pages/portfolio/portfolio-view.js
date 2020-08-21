'use strict';

import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import {hot} from 'react-hot-loader';
import '../../../styles/root.scss';
import '../../../styles/about.scss';
import '../../../styles/portfolio.scss';

const PlaceholderImg = (props) => <img src={props.src} alt={props.alt}></img>;

/**
* RenderPortfolioItem() - Class for rendering a portfolio item and its data on the portfolio-view page.
*/
class RenderPortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.data.description,
      tech: props.data.tech,
      enableListTwo: props.data.enableListTwo,
      listTwoTitle: props.data.listTwoTitle,
      listTwoContents: props.data.listTwoContents,
      buttons: props.data.buttons,
      media: props.data.media,
      colour: ["bg-white content-black", "bg-black content-white"],
      alignment: ["align-left", "align-right"],
    };
  }

  render() {
    return (
      <React.Fragment>
      <section id="info" className="section-default h-auto padding-6016 bg-black content-white">
      <article className="container column">
      <h1 data-aos="flip-down">Information</h1>
      <p className="" data-aos="fade-right" data-aos-delay="150">{this.state.description}</p>
      <div className="info-container">
      <div className="info-list-container">

      <div id="list-one" className="info-list" data-aos="fade-up" data-aos-delay="250">
      <h2>Development</h2>
      <ul>
      {this.state.tech.map((id, i) =>
        <li key={i.toString()}>{this.state.tech[i]}</li>
      )}
      </ul>
      </div>

      <div id="list-two" className="info-list" style={{display: this.state.enableListTwo ? "block" : "none"}} data-aos="fade-up" data-aos-delay="150">
      <h2>{this.state.listTwoTitle}</h2>
      <ul>
      {this.state.listTwoContents.map((name, i) =>
        <li key={i.toString()}>{this.state.listTwoContents[i]}</li>
      )}
      </ul>
      </div>
      </div>

      <div className="info-btn-container">
      {this.state.buttons.map((btn, i) =>
        <a key={i.toString()} href={this.state.buttons[i].link} target="_blank" className="info-btn-outer" style={{marginTop: i > 0 ? "15px" : "0px"}} data-aos="fade-left" data-aos-delay={i.toString() + "50"}>
        <div className="info-btn">{this.state.buttons[i].text}<span className="btn-arrow">&#8618;</span></div>
        </a>
      )}
      </div>

      </div>
      </article>
      </section>

      {this.state.media.map((n, i) =>
        <section key={i.toString()} className={"section-default h-auto padding-6016 " + this.state.colour[i % 2]}>
        <div className={"container portfolio-item-container " + this.state.alignment[i % 2]} data-aos="fade">
        <article className="wrapper-40 txt-wrapper">
        <h1>{this.state.media[i].title}</h1>
        <p>{this.state.media[i].text}</p>
        </article>
        <div className="wrapper-60 portfolio-img" data-aos="fade">
        <LazyLoad offset={[0, 300]} placeholder={<PlaceholderImg src={this.state.media[i].placeholder} alt={this.state.media[i].alt} />}>
          <img src={this.state.media[i].src} alt={this.state.media[i].alt}></img>
        </LazyLoad>
        </div>
        </div>
        </section>
      )}
      </React.Fragment>
    );
  }
}

export default RenderPortfolioItem;
