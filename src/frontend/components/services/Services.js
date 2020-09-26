'use strict';

import React, { useEffect } from 'react';

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
      title: "Web Design"
    },
    {
      id: "website-development-btn",
      href: "/services.html#web-development",
      src: webDevelopmentIcon,
      alt: "Website development button",
      title: "Web Development"
    },
    {
      id: "website-hosting-btn",
      href: "/services.html#web-hosting",
      src: webHostingIcon,
      alt: "Website hosting button",
      title: "Web Hosting"
    },
  ];

  useEffect(() => {
    addSmoothScroll();
  }, [])

  const addSmoothScroll = () => {
    $(document).ready(function(){
      $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          let hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        }
      });
    });
  };

  return (
    <React.Fragment>
    <section id="info" className="section-default h-auto padding-6016 bg-black content-white">
    <div className="container column">
    <article className="wrapper-100">
    <h1 data-aos="flip-down">Information</h1>
    <p data-aos="fade-right" data-aos-delay="150">SRP Designs offers the following web and design related services...</p>

    <Grid tiles={data} divide={true} class={""} />

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
