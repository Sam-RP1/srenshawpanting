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
      {icon.src}
      </a>
    )
  });

  return (
    <section className="footer-icon-container">{icons}</section>
  );
};

export default Icons;
