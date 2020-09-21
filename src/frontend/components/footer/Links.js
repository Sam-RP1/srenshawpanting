'use strict';

import React from 'react';

import './Links.scss';

/**
* Links - Contains the links content for the Footer component.
*/
const Links = (props) => {
  let links = props.links.map((link, i) => {
    return (
      <React.Fragment key={i}>
      <li>|</li>
      <li><a href={link.href}>{link.title}</a></li>
      </React.Fragment>
    )
  });

  return (
    <section className="footer-link-container">
    <ul>
    {links}
    <li>|</li>
    </ul>
    </section>
  );
};

export default Links;
