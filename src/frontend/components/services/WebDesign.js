'use strict';

import React from 'react';

import '../../styles/root.scss';
import './Services.scss';
import '../../styles/list.scss';

/**
* WebDesign - WebDesign component.
*/
const WebDesign = () => {
  return (
    <section id="web-design" className="section-default h-auto padding-6016">
    <div className="container services-item-container align-left" data-aos="fade">
    <article className="wrapper-100">
    <h1>Website Design</h1>
    <p style={{marginBottom: "10px"}}>Translate your website ideas and concepts into real designs.</p>
    <section className="list-container">
    <div>
    <h2>Website Design</h2>
    <p></p>
    <ul>
    <li>Cost: £15.00 per hour</li>
    <li>Prerequisites...</li>
    <ul>
    <li>Just a basic idea of what you want!</li>
    </ul>
    <li>Includes...</li>
    <ul>
    <li>Website wireframes for mobile & desktop devices</li>
    <li>Website design mock-ups for mobile & desktop devices</li>
    </ul>
    </ul>
    </div>
    </section>
    <p>For all questions, queries or enquiries related to the website design service please use the <a href="/contact.html"><u><i>contact form</i></u></a> and select the "Website Design" option from the "Select a Service" drop-down menu.</p>
    </article>
    </div>
    </section>
  );
}

export default WebDesign;
