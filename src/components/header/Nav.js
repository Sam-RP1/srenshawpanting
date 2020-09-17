'use strict';

import React, { useState } from 'react';
import {hot} from 'react-hot-loader';

import './Nav.scss';

/**
* Nav - Contains & handles the Navigation content for the Header component.
*/
const Nav = () => {
  const [navState, setNavState] = useState(false);

  const navHandler = () => {
    const menuBtn = document.getElementById('nav-menu-btn');
    const menu = document.getElementById('nav-menu');

    if (navState === false) {
      setNavState(true);
      if (window.innerWidth < 768) {
        if (window.scrollY > 50 || document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          menu.style.top = "69px";
        } else {
          menu.style.top = "79px";
        }
      }
      menu.style.height = "160px";
    } else {
      setNavState(false);
      menu.style.height = "0px";
    }

    menuBtn.classList.toggle("change");
  }

  return (
    <section className="nav-container">
    <nav className="nav-wrapper">
    <ul id="nav-menu">
    <li><a href="index.html#about">About</a></li>
    <li><a href="portfolio.html">Portfolio</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="contact.html">Contact</a></li>
    </ul>
    </nav>
    <div id="nav-menu-btn" onClick={() => {navHandler()}}>
    <div id="bar-1"></div>
    <div id="bar-2"></div>
    <div id="bar-3"></div>
    </div>
    </section>
  )
}

export default Nav;
