'use strict';

import React from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import './Services.scss';
import '../about/About.scss';

import Design from './Design';
import Development from './Development';
import Hosting from './Hosting';

/**
* Services - Services component.
*/
const Services = () => {
  const colour = ["bg-white content-black", "bg-black content-white"];
  const alignment = ["align-left", "align-right"];

  return (
    <React.Fragment>
    <section id="info" className="section-default h-auto padding-6016 bg-black content-white">
    <article className="container column">
    <h1 data-aos="flip-down">Services</h1>
    <p data-aos="fade-right" data-aos-delay="150">SRP Designs primarily offers web related services. These web related services include...</p>
    <div className="info-list-container">
    <div className="info-list" data-aos="fade-up" data-aos-delay="125">
    <ul>
    <li>Bespoke Website Design</li>
    <li>Website Development</li>
    <li>Website Hosting</li>
    </ul>
    </div>
    </div>
    <p data-aos="fade-left" data-aos-delay="150">If you would like other services that do not pertain to the web or are not listed, then please get in touch using the contact form found <a href="contact.html"><i><b>here</b></i></a>. I will reply as soon as possible.</p>
    </article>
    </section>
    <Design />
    <Development />
    <Hosting />
    </React.Fragment>
  );
}

export default Services;
