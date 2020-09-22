'use strict';

import React from 'react';

import './Icons.scss';

/**
* Icons - Contains the icons content for the footer component.
*/
const Icons = (props) => {
  let icons = props.icons.map((icon, i) => {
    return (
      <a key={i} href={icon.href} target="_blank">
      <img src={icon.src} alt={icon.alt}></img>
      </a>
    )
  });

  return (
    <section className="footer-icon-container">{icons}</section>
  );
};

export default Icons;
