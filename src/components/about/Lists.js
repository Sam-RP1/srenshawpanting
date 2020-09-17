'use strict';

import React from 'react';
import {hot} from 'react-hot-loader';

/**
* Lists - Contains the lists content for the About component.
*/
const Lists = (props) => {
  let listOne = props.listOne.list.map((item, i) => <li key={i}>{item}</li>);
  let listTwo = props.listTwo.list.map((item, i) => <li key={i}>{item}</li>);

  return (
    <div className="about-list-container">
    <div className="about-list" data-aos="fade-up" data-aos-delay="250">
    <h2>{props.listOne.title}</h2>
    <ul>
    {listOne}
    </ul>
    </div>
    <div className="about-list" data-aos="fade-up" data-aos-delay="150">
    <h2>{props.listTwo.title}</h2>
    <ul>
    {listTwo}
    </ul>
    </div>
    </div>
  )
}

export default Lists;
