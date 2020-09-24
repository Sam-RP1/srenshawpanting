'use strict';

import React from 'react';

import '../../styles/root.scss';
import './Services.scss';
import '../../styles/list.scss';

/**
* GraphicDesign - GraphicDesign component.
*/
const GraphicDesign = () => {
  return (
    <section id="graphic-design" className="section-default h-auto padding-6016">
    <div className="container services-item-container align-left" data-aos="fade">
    <article className="wrapper-100">
    <h1>Graphic Design</h1>
    <p style={{marginBottom: "10px"}}>Make your creative visions for business cards, logos, icons and other artwork real.</p>
    <section className="list-container">
    <div>
    <h2>Graphic Design</h2>
    <p></p>
    <ul>
    <li>Price: £15.00 per hour</li>
    <li>Prerequisites -</li>
    <ul>
    <li>A direction & idea of what you want</li>
    </ul>
    <li>Includes -</li>
    <ul>
    <li>High resolution PNG & JPG files</li>
    </ul>
    </ul>
    </div>
    </section>
    <p>For all questions, queries or enquiries related to the graphic design service please use the <a href="/contact.html"><u><i>contact form</i></u></a> and select the "Graphic Design" option from the "Select a Service" drop-down menu.</p>
    </article>
    </div>
    </section>
  );
}

export default GraphicDesign;
