'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';

/**
* AboutList - Contains the Lists for the Contact component.
*/
class AboutLists extends Component {
  render() {
    let listOne = this.props.listOne.list.map((item, i) => <li key={i}>{item}</li>);
    let listTwo = this.props.listTwo.list.map((item, i) => <li key={i}>{item}</li>);

    return (
      <div className="about-list-container">
      <div className="about-list" data-aos="fade-up" data-aos-delay="250">
      <h2>{this.props.listOne.title}</h2>
      <ul>
      {listOne}
      </ul>
      </div>
      <div className="about-list" data-aos="fade-up" data-aos-delay="150">
      <h2>{this.props.listTwo.title}</h2>
      <ul>
      {listTwo}
      </ul>
      </div>
      </div>
    )
  }
}

export default AboutLists;
