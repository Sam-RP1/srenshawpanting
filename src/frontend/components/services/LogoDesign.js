'use strict';

import React from 'react';

import '../../styles/root.scss';
import './Services.scss';
import '../../styles/list.scss';

/**
* LogoDesign - LogoDesign component.
*/
const LogoDesign = () => {
  return (
    <section id="logo-design" className="section-default h-auto padding-6016">
    <div className="container services-item-container align-left" data-aos="fade">
    <article className="wrapper-100">
    <h1>Logo Design</h1>
    <p style={{marginBottom: "10px"}}>Make your vision for a professional logo real.</p>
    <section className="list-container">
    <div>
    <h2>Logo Design</h2>
    <p></p>
    <ul>
    <li>Cost: £15.00 per hour</li>
    <li>Prerequisites...</li>
    <ul>
    <li>Just a direction and idea of what you would like!</li>
    </ul>
    <li>Includes...</li>
    <ul>
    <li>Source file</li>
    <li>High resolution PNG & JPG files</li>
    </ul>
    </ul>
    </div>
    </section>
    <p>For all questions, queries or enquiries related to the logo design service please use the <a href="/contact.html"><u><i>contact form</i></u></a> and select the "Logo Design" option from the "Select a Service" drop-down menu.</p>
    </article>
    </div>
    </section>
  );
}

export default LogoDesign;
