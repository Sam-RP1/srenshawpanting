'use strict';

import React, { useState, useEffect } from 'react';

import '../../styles/root.scss';
import './Portfolio.scss';

import Section from '../ui/Section';
import { portfolioArr } from './Portfolio-data.js';

/**
* Portfolio - Renders portfolio items on the portfolio page.
*/
const Portfolio = React.memo((props) => {
  const [githubData, setGithubData] = useState([]);
  const aos = ["fade-right", "fade-up", "fade-left", "fade-down", "fade-right", "fade-left"];

  const handleTab = (id) => {
    const elem = document.getElementById(id);
    elem.parentNode.classList.toggle('active');
  }

  const fetchGithub = () => {
    const request = 'https://api.github.com/users/Sam-RP1/repos';

    fetch(request)
    .then((res) => res.json())
    .then((data) => {
      const arr = [];

      data.sort((a, b) => {
        return (a.pushed_at < b.pushed_at) ? 1 : ((a.pushed_at > b.pushed_at) ? -1 : 0);
      });

      for (let item of data) {
        let entry = {
          id: item.id,
          title: item.name,
          created: item.created_at.split('T')[0],
          updated: item.pushed_at.split('T')[0],
          repoUrl: item.svn_url,
          webUrl: item.homepage
        }
        arr.push(entry);
      }
      
      setGithubData(arr);
    })
    .catch((error) => console.log('Problem fetching data'))
  }

  useEffect(() => {
    fetchGithub();
  }, [])

  return (
    <>
    <Section class={"bg-black content-white"}>
    <h1 data-aos="flip-down">Featured</h1>
    <div className="portfolio-gallery-container">
    {portfolioArr.map((item, i) =>
      <div key={i} className="gallery-item-container" data-aos={aos[i % 6]}>
      <div id={item.id} className="gallery-item-inner">
      <section className="gallery-item-front">
      <div className="gallery-item-picture-container">
      <a href={item.url} target={item.url.substr(0, 5) === "/port" ? "" : "_blank"}></a>
      </div>
      <div className="gallery-front-tab" onClick={() => handleTab(item.id)}>
      <span></span>
      <h2>{item.title}</h2>
      </div>
      </section>
      <section className="gallery-item-back">
      <article className="gallery-item-info">
      <h2>{item.title}</h2>
      <h3>{item.purpose}</h3>
      <p>{item.description}</p>
      </article>
      <div className="gallery-back-tab">
      <div className="gallery-item-btn" onClick={() => handleTab(item.id)}>&#10006; Close</div>
      <a className="gallery-item-btn" href={item.url} target={item.url.substr(0, 5) === "/port" ? "" : "_blank"}>{item.button} &#8618;</a>
      </div>
      </section>
      </div>
      </div>
    )}
    </div>
    </Section>
    <Section class={"bg-white content-black"}>
    <h1 data-aos="flip-down">Repositories</h1>
    <div className="repo-container">
    {githubData.map((item, i) =>
      <div key={item.id} id={item.title} className="repo">
      <h2>{item.title}</h2>
      <div className="repo-content">
      <div className="info-wrapper">
      <div>
      <p>Created:</p>
      <p>{item.created}</p>
      </div>
      <div>
      <p>Last Commit:</p>
      <p>{item.updated}</p>
      </div>
      </div>
      <div className="icons-wrapper">
      <a href={item.webUrl} target="_blank" style={{display: (item.webUrl === null ? "none" : "")}}><i className="fas fa-link"></i></a>
      <a href={item.repoUrl} target="_blank"><i className="fab fa-github"></i></a>
      </div>
      </div>
      </div>
    )}
    </div>
    </Section>
    </>
  );
})

export default Portfolio;
