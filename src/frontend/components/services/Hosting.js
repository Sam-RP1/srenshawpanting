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
    <li>Deployment in one region of your choice</li>
    </ul>
    <li>Price -</li>
    <ul>
    <li>Setup Fee: £10.00</li>
    <li>Yearly Fee: £40.00</li>
    </ul>
    <li>Best for serverless websites that...</li>
    <ul>
    <li>Experience low to moderate traffic in a specific region</li>
    </ul>
    </ul>
    </div>

    <div>
    <h2>Advanced Hosting</h2>
    <p>The hosting package that will get your website up, running and ready for broader demand.</p>
    <ul>
    <li>Includes -</li>
    <ul>
    <li>Deployment in two regions of your choice</li>
    </ul>
    <li>Price -</li>
    <ul>
    <li>Setup Fee: £15.00</li>
    <li>Yearly Fee: £60.00</li>
    </ul>
    <li>Best for serverless websites that...</li>
    <ul>
    <li>Experience moderate traffic across different regions</li>
    <li>Need to display specific content to different regions</li>
    </ul>
    </ul>
    </div>

    <div>
    <h2>Custom Hosting</h2>
    <p>The complete hosting package that can be tailored to meet your requirements.</p>
    <p>Need enterprise-level hosting? Need a specific backend or server configuration? Want a solution that scales resources dynamically to meet fluctuating traffic? Want hosting in multiple regions?</p>
    <p>Then this is the hosting package for you.</p>
    <ul>
    <li>Price - </li>
    <ul>
    <li>Setup Fee: £10.00 per hour</li>
    <li>Yearly Fee: Variable</li>
    </ul>
    <li>For solutions requiring one or more of the following...</li>
    <ul>
    <li>Scalability</li>
    <li>Hosting in multiple regions</li>
    <li>Enterprise performance</li>
    <li>Custom infrastructure</li>
    <li>Custom server configuration</li>
    </ul>
    </ul>
    </div>
    </section>

    <p className="small-print">***A domain name is required to host your website. Domain names can be purchased online for a specific fee per year.</p>
    <p>When hosting your website with SRP Designs, we will require your domain name to be handled by us so we can configure it as necessary. If you already own a domain name, then we will need it to be transferred to us. However, if you do not already own your desired domain name, don't panic! We can purchase it on your behalf, making the process much easier. While a domain name is in our possession...</p>
    <ul className="temp-list-style">
    <li>We will invoice you yearly for the cost to keep it</li>
    <li>You can request for your domain name to be returned to you at anytime</li>
    </ul>
    <p>For all questions, queries or inquiries related to the hosting packages offered here, please use the <a href="/contact.html"><u><i>contact form</i></u></a> and select the "Website Hosting" option from the "Select a Service" drop-down menu.</p>
    </article>
    </div>
    </section>
  );
}

export default Hosting;
