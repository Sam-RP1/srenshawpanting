'use strict';

import React from 'react';

/**
* Icons - Contains the icons content for the About component.
*/
const Icons = (props) => {
  const aos_data = ["fade-right", "fade-up", "fade-down", "fade-left"];
  const aos_delay = ["180", "120", "220", "100"];

  let iconRowOne = props.icons.rowOne.map((item, i) => {
    return (
      <a key={i} href={item.href} target="_blank" data-aos={aos_data[i]} data-aos-delay={aos_delay[i]}>
      <img src={item.src} alt={item.alt}></img>
      </a>
    )
  });
  let iconRowTwo = props.icons.rowTwo.map((item, i) => {
    return (
      <a key={i} href={item.href} target="_blank" data-aos={aos_data[i+2]} data-aos-delay={aos_delay[i+2]}>
      <img src={item.src} alt={item.alt}></img>
      </a>
    )
  });

  return (
    <div className="about-icons-container">
    <div className="icon-row">
    {iconRowOne}
    </div>
    <div className="icon-row">
    {iconRowTwo}
    </div>
    </div>
  )
}

export default Icons;
