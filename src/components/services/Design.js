'use strict';

import React from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import './Services.scss';
import '../about/About.scss';

/**
* Design - Design component.
*/
const Design = () => {
  return (
    <section id="info" className="section-default h-auto padding-6016 bg-white content-black">
    <article className="container column">
    <h1 data-aos="flip-down">Website Design</h1>
    <p data-aos="fade-right" data-aos-delay="150"></p>
    </article>
    </section>
  );
}

export default Design;
