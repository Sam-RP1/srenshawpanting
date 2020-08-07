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

    // this.handleTab = this.handleTab.bind(this)
  }

  handleTab(id) {
    const elem = document.getElementById(id);
    if (elem.style.height === '' || elem.style.height === '75px') {
      elem.style.height = "100%";
      const deg = '135';
      elem.childNodes[0].childNodes[0].style.webkitTransform = 'rotate('+deg+'deg)';
      elem.childNodes[0].childNodes[0].style.msTransform     = 'rotate('+deg+'deg)';
      elem.childNodes[0].childNodes[0].style.oTransform      = 'rotate('+deg+'deg)';
      elem.childNodes[0].childNodes[0].style.transform       = 'rotate('+deg+'deg)';
    } else {
      elem.style.height = "75px";
      const deg = '-45';
      elem.childNodes[0].childNodes[0].style.webkitTransform = 'rotate('+deg+'deg)';
      elem.childNodes[0].childNodes[0].style.msTransform     = 'rotate('+deg+'deg)';
      elem.childNodes[0].childNodes[0].style.oTransform      = 'rotate('+deg+'deg)';
      elem.childNodes[0].childNodes[0].style.transform       = 'rotate('+deg+'deg)';
    }
  }

  render() {
    return (
      <div className="portfolio-gallery-container container">
      {this.state.array.map((id, i) =>
        <div key={i.toString()} id={this.state.array[i].id} className="portfolio-gallery-item bg-white">
        <a href={this.state.array[i].url} target={this.state.array[i].url.substr(0, 5) === "/port" ? "" : "_blank"}></a>
        <section id={"tab_" + i} className="gallery-item-tab">
        <div onClick={() => this.handleTab("tab_" + i)}>
        <span></span>
        <h2>{this.state.array[i].title}</h2>
        </div>
        <article>
        </article>
        </section>
        </div>
      )}
      </div>
    );
  }
}

// {this.state.array[i].button}
export default Portfolio;
