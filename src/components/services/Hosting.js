'use strict';

import React from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import '../../styles/list.scss';
import './Services.scss';

/**
* Hosting - Hosting component.
*/
const Hosting = () => {
  return (
    <section id="hosting" className="section-default h-auto padding-6016">
    <div className="container services-item-container align-left" data-aos="fade">
    <article className="wrapper-100">
    <h1>Website Hosting</h1>

    <section className="list-container four">
    <div>
    <h2>Standard Hosting</h2>
    <p>The basics hosting package that will get your website up and running on a budget.</p>
    <ul>
    <li>Cost: £30.00 per year</li>
    <li>Best for static websites that...</li>
    <ul>
    <li>Experience low to moderate traffic</li>
    <li>Have no server code</li>
    </ul>
    </ul>
    </div>

    <div>
    <h2>Premium Hosting</h2>
    <p>The advanced hosting package that will get your website up, running and ready for greater demand.</p>
    <ul>
    <li>Cost: £40.00 per year</li>
    <li>Best for static websites that...</li>
    <ul>
    <li>Experience moderate to high traffic</li>
    <li>Have no server code</li>
    </ul>
    </ul>
    </div>

    <div>
    <h2>Deluxe Hosting</h2>
    <p>The expert hosting package that will ensure your complex static website or web application is reliable, available and performs excellently.</p>
    <ul>
    <li>Cost: £50.00++ per year</li>
    <li>Best for complex static websites or web applications that need...</li>
    <ul>
    <li>A Database</li>
    <li>High Performance</li>
    <li>Custom Server Configuration</li>
    </ul>
    </ul>
    </div>

    <div>
    <h2>Custom Hosting</h2>
    <p>The complete specialist hosting package that can be tailored to meet your unique requirements!</p>
    <p>Need enterprise level hosting? Want a solution that scales resources dynamically to meet fluctuating traffic? Want a specific backend or server configuration?</p>
    <p>Then this is the hosting package for you.</p>
    <ul>
    <li>Cost: Variable</li>
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

    <p>For all questions, queries or enquiries related to the hosting services offered here please use the <a href="/contact.html"><u><i>contact form</i></u></a> and select the "Website Hosting" option from the "Select a Service" drop down menu.</p>
    </article>
    </div>
    </section>
  );
}

export default Hosting;
