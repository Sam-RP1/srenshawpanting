'use strict';

import React from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/list.scss';

/**
* Lists - Contains the lists content for the About component.
*/
const Lists = (props) => {
  let listOne = props.listOne.list.map((item, i) => <li key={i}>{item}</li>);
  let listTwo = props.listTwo.list.map((item, i) => <li key={i}>{item}</li>);

  return (
    <section className="list-container-70 two">
    <div data-aos="fade-up" data-aos-delay="250">
    <h2>{props.listOne.title}</h2>
    <ul>
    {listOne}
    </ul>
    </div>
    <div data-aos="fade-up" data-aos-delay="150">
    <h2>{props.listTwo.title}</h2>
    <ul>
    {listTwo}
    </ul>
    </div>
    </section>
  )
}

export default Lists;
