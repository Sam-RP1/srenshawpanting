'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../../styles/root.scss';
import '../../../styles/about.scss';
import '../../../styles/portfolio.scss';

class RenderPortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoText: props.data.infoText,
      tech: props.data.tech,
      listTwoTitle: props.data.listTwoTitle,
      listTwo: props.data.listTwo,
      displayListTwo: props.data.displayListTwo,
      firstBtn: props.data.firstBtn,
      secondBtn: props.data.secondBtn,
      secondBtnText: props.data.secondBtnText,
      displaySecondBtn: props.data.displaySecondBtn,
      pictures: props.data.pictures,
      pictureTitles: props.data.titles,
      pictureTexts: props.data.texts,
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
      <p className="" data-aos="fade-right" data-aos-delay="150">{this.state.infoText}</p>
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

      <div id="list-two" className="info-list" style={{display: this.state.displayListTwo ? "block" : "none"}} data-aos="fade-up" data-aos-delay="150">
      <h2>{this.state.listTwoTitle}</h2>
      <ul>
      {this.state.listTwo.map((name, i) =>
        <li key={i.toString()}>{this.state.listTwo[i]}</li>
      )}
      </ul>
      </div>
      </div>
      <div className="info-btn-container">
      <a id="report-btn" href={this.state.firstBtn} target="_blank" className="info-btn-a" data-aos="fade-left" data-aos-delay="100">
      <button className="info-btn">View Report<span className="btn-arrow">&#8618;</span></button>
      </a>
      <a id="secondary-btn" href={this.state.secondBtn} target="_blank" className="info-btn-a" style={{display: this.state.displaySecondBtn ? "flex" : "none"}} data-aos="fade-left" data-aos-delay="250">
      <button className="info-btn">View {this.state.secondBtnText}<span className="btn-arrow">&#8618;</span></button>
      </a>
      </div>
      </div>
      </article>
      </section>

      {this.state.pictures.map((n, i) =>
        <section key={i.toString()} className={"section-default h-auto padding-6016 " + this.state.colour[i % 2]}>
        <div className={"container portfolio-item-container " + this.state.alignment[i % 2]} data-aos="fade">
        <article className="wrapper-40 txt-wrapper">
        <h1>{this.state.pictureTitles[i]}</h1>
        <p>{this.state.pictureTexts[i]}</p>
        </article>
        <div className="wrapper-60 portfolio-img bg-white" data-aos="fade">
        <img src={this.state.pictures[i].src} alt={this.state.pictures[i].alt}></img>
        </div>
        </div>
        </section>
      )}
      </React.Fragment>
    );
  }
}

export default RenderPortfolioItem;
