'use strict';

import React from 'react';

import '../../styles/root.scss';
import './Services.scss';
import '../../styles/list.scss';

/**
* Development - Development component.
*/
const Development = () => {
  return (
    <section id="web-development" className="section-default h-auto padding-6016">
    <div className="container services-item-container align-left"  data-aos="fade">
    <article className="wrapper-100">
    <h1>Website Development</h1>
    <p style={{marginBottom: "10px"}}>If you would like to turn your creative vision for a website into reality then look no further.</p>
    <section className="list-container">
    <div>
    <h2>Website Development</h2>
    <p></p>
    <ul>
    <li>Cost: £15.00 per hour</li>
    <li>Prerequisites...</li>
    <ul>
    <li>A website design for both mobile & desktop devices</li>
    <li>Text content you would like</li>
    <li>Images & media & other files prepared</li>
    </ul>
    <li>Includes...</li>
    <ul>
    <li>Text content spell checking</li>
    <li>Website & asset optimisation to improve load times</li>
    <li>Three hours of free changes per year upon satisfactory completion & delivery</li>
    </ul>
    </ul>
    </div>
    </section>
    <p>For all questions, queries or enquiries related to the website development service please use the <a href="/contact.html"><u><i>contact form</i></u></a> and select the "Website Development" option from the "Select a Service" drop-down menu.</p>
    </article>
    </div>
    </section>
  );
}

export default Development;
