'use strict';

import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import {hot} from 'react-hot-loader';
import '../../../styles/root.scss';
import '../../../styles/about.scss';
import '../../../styles/portfolio.scss';

const PlaceholderImg = (props) => <img src={props.src} alt={props.alt}></img>;

/**
* RenderPortfolioItem - Class for rendering a portfolio item and its data on the portfolio-view page.
*/
class RenderPortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.data.description,
      tech: props.data.tech,
      enableListTwo: props.data.enableListTwo,
      listTwoTitle: props.data.listTwoTitle,
      listTwoContents: props.data.listTwoContents,
      buttons: props.data.buttons,
      media: props.data.media
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
      <PortfolioItemList tech={this.state.tech} enableListTwo={this.state.enableListTwo} listTwoContents={this.state.listTwoContents} />
      <PortfolioItemButton buttons={this.state.buttons} />
      </div>
      </article>
      </section>
      <PortfolioItemSection media={this.state.media} />
      </React.Fragment>
    );
  }
}

/**
* PortfolioItemList - Contains the List(s) for the RenderPortfolioItem component.
*/
class PortfolioItemList extends Component {
  render() {
    return (
      <div className="info-list-container">
      <div id="list-one" className="info-list" data-aos="fade-up" data-aos-delay="250">
      <h2>Development</h2>
      <ul>
      {this.props.tech.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      </div>
      <div id="list-two" className="info-list" style={{display: this.props.enableListTwo ? "block" : "none"}} data-aos="fade-up" data-aos-delay="150">
      <h2>{this.props.listTwoTitle}</h2>
      <ul>
      {this.props.listTwoContents.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      </div>
      </div>
    )
  }
}

/**
* PortfolioItemButton - Contains the button(s) for the RenderPortfolioItem component.
*/
class PortfolioItemButton extends Component {
  render() {
    return (
      <div className="info-btn-container">
      {this.props.buttons.map((item, i) =>
        <a key={i} href={item.link} target="_blank" className="info-btn-outer" style={{marginTop: i > 0 ? "15px" : "0px"}} data-aos="fade-left" data-aos-delay={i.toString() + "50"}>
        <div className="info-btn">{item.text}<span className="btn-arrow">&#8618;</span></div>
        </a>
      )}
      </div>
    )
  }
}

/**
* PortfolioItemSection - Contains the Section(s) for the RenderPortfolioItem component.
*/
class PortfolioItemSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colour: ["bg-white content-black", "bg-black content-white"],
      alignment: ["align-left", "align-right"],
    };
  }

  render() {
    return (
      <React.Fragment>
      {this.props.media.map((item, i) =>
        <section key={i} className={"section-default h-auto padding-6016 " + this.state.colour[i % 2]}>
        <div className={"container portfolio-item-container " + this.state.alignment[i % 2]} data-aos="fade">
        <article className="wrapper-40 txt-wrapper">
        <h1>{item.title}</h1>
        <p>{item.text}</p>
        </article>
        <div className="wrapper-60 portfolio-img" data-aos="fade">
        <LazyLoad offset={[0, 300]} once="true" placeholder={<PlaceholderImg src={item.placeholder} alt={item.alt} />}>
          <img src={item.src} alt={item.alt}></img>
        </LazyLoad>
        </div>
        </div>
        </section>
      )}
      </React.Fragment>
    )
  }
}

export default RenderPortfolioItem;
