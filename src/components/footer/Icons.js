'use strict';

import React from 'react';
import {hot} from 'react-hot-loader';

import './Icons.scss';

/**
* Icons - Contains the icons content for the Footer component.
*/
const Icons = (props) => {
  let icons = props.icons.map((icon, i) => {
    return (
      <a key={i} href={icon.href} target="_blank" className={i === props.icons.length ? "footer-icon-l" : undefined}>
      <img src={icon.src} alt={icon.alt}></img>
      </a>
    )
  });

  return (
    <section className="footer-icon-container">{icons}</section>
  );
};

export default Icons;
