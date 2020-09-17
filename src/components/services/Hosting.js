'use strict';

import React from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import './Services.scss';
import '../about/About.scss';

/**
* Hosting - Hosting component.
*/
const Hosting = () => {
  return (
    <section id="info" className="section-default h-auto padding-6016 bg-white content-black">
    <article className="container column">
    <h1 data-aos="flip-down">Website Hosting</h1>
    <p data-aos="fade-right" data-aos-delay="150">SRP Designs will host your website and manage it for you!</p>
    <div className="info-list-container">
    <div className="info-list" data-aos="fade-up" data-aos-delay="125">
    <ul>
    <li>Cost: £30/yr</li>
    </ul>
    </div>
    </div>
    </article>
    </section>
  );
}

export default Hosting;
