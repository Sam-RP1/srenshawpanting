'use strict';

import React from 'react';

import '../../styles/root.scss';
import './Services.scss';
import '../about/About.scss';
import '../../styles/list.scss';
import '../../styles/grid.scss';

import LogoDesign from './LogoDesign';
import WebDesign from './WebDesign';
import Development from './Development';
import Hosting from './Hosting';

import webHostingIcon from '../../assets/icons/web-hosting-min.png';
import webDevelopmentIcon from '../../assets/icons/web-development-min.png';
import webDesignIcon from '../../assets/icons/web-design-min.png';
import logoDesignIcon from '../../assets/icons/logo-design-min.png';

/**
* Services - Services component.
*/
const Services = () => {
  const colour = ["bg-white content-black", "bg-black content-white"];
  const alignment = ["align-left", "align-right"];

  return (
    <React.Fragment>
    <section id="info" className="section-default h-auto padding-6016 bg-black content-white">
    <div className="container column">
    <article className="wrapper-100">
    <h1 data-aos="flip-down">Information</h1>
    <p data-aos="fade-right" data-aos-delay="150">SRP Designs offers web and design related services which include, but are not limited too...</p>

    <section className="grid-container even">
    <div data-aos="fade-up" data-aos-delay="100">
    <a href="/services.html#logo-design">
    <img src={logoDesignIcon} alt="Website Hosting button"></img>
    <h2>Logo Design</h2>
    </a>
    </div>

    <div data-aos="fade-up" data-aos-delay="100">
    <a href="/services.html#web-design">
    <img src={webDesignIcon} alt="Website Hosting button"></img>
    <h2>Website Design</h2>
    </a>
    </div>

    <div data-aos="fade-up" data-aos-delay="100">
    <a href="/services.html#web-development">
    <img src={webDevelopmentIcon} alt="Website Hosting button"></img>
    <h2>Website Development</h2>
    </a>
    </div>

    <div data-aos="fade-up" data-aos-delay="100">
    <a href="/services.html#web-hosting">
    <img src={webHostingIcon} alt="Website Hosting button"></img>
    <h2>Website Hosting</h2>
    </a>
    </div>

    </section>

    <p data-aos="fade-left" data-aos-delay="150">If you are interested in other design services that are not listed above, like business cards, please get in touch using the contact form provided <a href="contact.html"><i><u>here</u></i></a>. We will reply as soon as possible.</p>
    </article>
    </div>
    </section>
    <LogoDesign />
    <WebDesign />
    <Development />
    <Hosting />
    </React.Fragment>
  );
}

export default Services;
