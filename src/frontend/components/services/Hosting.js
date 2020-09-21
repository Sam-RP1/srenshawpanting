'use strict';

import React from 'react';

import '../../styles/root.scss';
import '../../styles/list.scss';
import './Services.scss';

/**
* Hosting - Hosting component.
*/
const Hosting = () => {
  return (
    <section id="web-hosting" className="section-default h-auto padding-6016">
    <div className="container services-item-container align-left" data-aos="fade">
    <article className="wrapper-100">
    <h1>Website Hosting</h1>

    <section className="list-container three">
    <div>
    <h2>Standard Hosting</h2>
    <p>A basics hosting package that will get your website up and running on a budget.</p>
    <ul>
    <li>Includes -</li>
    <ul>
    <li>Deployment in one region</li>
    </ul>
    <li>Price -</li>
    <ul>
    <li>Setup Fee: £10.00</li>
    <li>Yearly Fee: £30.00</li>
    </ul>
    <li>Best for static websites that...</li>
    <ul>
    <li>Experience low to moderate traffic in a specific region</li>
    <li>Have no server code</li>
    </ul>
    </ul>
    </div>

    <div>
    <h2>Advanced Hosting</h2>
    <p>The hosting package that will get your website up, running and ready for broader demand.</p>
    <ul>
    <li>Includes -</li>
    <ul>
    <li>Deployment in two regions (more regions can be added)</li>
    </ul>
    <li>Price -</li>
    <ul>
    <li>Setup Fee: £15.00</li>
    <li>Yearly Fee: £50.00</li>
    <li>Extra Region Fee Per Year: £20.00</li>
    </ul>
    <li>Best for static websites that...</li>
    <ul>
    <li>Experience moderate traffic across different regions</li>
    <li>Have no server code</li>
    </ul>
    </ul>
    </div>

    <div>
    <h2>Custom Hosting</h2>
    <p>The complete specialist hosting package that can be tailored to meet your unique requirements!</p>
    <p>Need enterprise level hosting? Want a solution that scales resources dynamically to meet fluctuating traffic? Want a specific backend or server configuration?</p>
    <p>Then this is the hosting package for you.</p>
    <ul>
    <li>Price: Variable</li>
    <li>Best for solutions that require...</li>
    <ul>
    <li>Scalability</li>
    <li>High Capacity</li>
    <li>Enterprise Performance</li>
    <li>Custom Infrastructure</li>
    <li>Custom Server Configuration</li>
    </ul>
    </ul>
    </div>
    </section>

    <p style={{marginBottom: "10px"}}>In order to host your website you will require a domain name. Domain names can be purchased from a number of retailers and cost a specific fee per year to keep. When hosting your website with SRP Designs we require your domain name to be handled by us so that we can configure it as necessary. If you already own your desired domain name we will require it to be transfered to us and if you do not own it then we can purchase it on your behalf. While a domain name is being managed by us we will invoice you yearly for the cost to keep it.</p>
    <p>For all questions, queries or enquiries related to the hosting packages offered here please use the <a href="/contact.html"><u><i>contact form</i></u></a> and select the "Website Hosting" option from the "Select a Service" drop-down menu.</p>
    </article>
    </div>
    </section>
  );
}

export default Hosting;
