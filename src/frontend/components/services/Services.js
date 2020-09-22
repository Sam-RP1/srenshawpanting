'use strict';

import React from 'react';

import '../../styles/root.scss';
import './Services.scss';
import '../about/About.scss';
import '../../styles/list.scss';

import Grid from '../ui/Grid';
import GraphicDesign from './GraphicDesign';
import WebDesign from './WebDesign';
import Development from './Development';
import Hosting from './Hosting';

import webHostingIcon from '../../assets/icons/web-hosting-min.png';
import webDevelopmentIcon from '../../assets/icons/web-development-min.png';
import webDesignIcon from '../../assets/icons/web-design-min.png';
import graphicDesignIcon from '../../assets/icons/graphic-design-min.png';

/**
* Services - Services component.
*/
const Services = () => {
  const colour = ["bg-white content-black", "bg-black content-white"];
  const alignment = ["align-left", "align-right"];
  const data = [
    {
      id: "graphic-design-btn",
      href: "/services.html#graphic-design",
      src: graphicDesignIcon,
      alt: "Graphic design button",
      title: "Graphic Design"
    },
    {
      id: "website-design-btn",
      href: "/services.html#web-design",
      src: webDesignIcon,
      alt: "Website design button",
      title: "Website Design"
    },
    {
      id: "website-development-btn",
      href: "/services.html#web-development",
      src: webDevelopmentIcon,
      alt: "Website development button",
      title: "Website Development"
    },
    {
      id: "website-hosting-btn",
      href: "/services.html#web-hosting",
      src: webHostingIcon,
      alt: "Website hosting button",
      title: "Website Hosting"
    },
  ];

  return (
    <React.Fragment>
    <section id="info" className="section-default h-auto padding-6016 bg-black content-white">
    <div className="container column">
    <article className="wrapper-100">
    <h1 data-aos="flip-down">Information</h1>
    <p data-aos="fade-right" data-aos-delay="150">SRP Designs offers web and design related services which include, but are not limited too...</p>

    <Grid tiles={data} class={"lg"} />

    <p data-aos="fade-left" data-aos-delay="150">If you are interested in other design services that are not listed above, like business cards, please get in touch using the contact form provided <a href="contact.html"><i><u>here</u></i></a>. We will reply as soon as possible.</p>
    </article>
    </div>
    </section>
    <GraphicDesign />
    <WebDesign />
    <Development />
    <Hosting />
    </React.Fragment>
  );
}

export default Services;
