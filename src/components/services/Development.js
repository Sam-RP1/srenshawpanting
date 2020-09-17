'use strict';

import React from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import './Services.scss';
import '../about/About.scss';

/**
* Development - Development component.
*/
const Development = () => {
  return (
    <section id="info" className="section-default h-auto padding-6016 bg-black content-white">
    <article className="container column">
    <h1 data-aos="flip-down">Website Development</h1>
    <p data-aos="fade-right" data-aos-delay="150">SRP Designs will develop your weebsite. This includes...</p>
    </article>
    </section>
  );
}

export default Development;
