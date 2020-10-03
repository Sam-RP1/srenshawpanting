import React from 'react';

import '../../styles/root.scss';

const Repositories = React.memo((props) => {
  const numPages = props.repos.length / 5;
  const pages = [];

  const handlePages = (id) => {
    const pageNum = id.split("-")[2];
    console.log(pageNum);

    const prevPage = document.getElementById(prevId);
    const nextPage = document.getElementById(nextId);
    const currentPage = document.getElementById(id);
    page.style.display = 'none';

  }

  let currentX = 0;
  let maxX = currentX + 5;

  for (let i = 0; i < numPages; i++) {
    let page = [];
    for (let x = currentX; x < maxX; x++) {
      if (x === props.repos.length) {
        break;
      } else {
        page.push(props.repos[x]);
      }
    }
    pages.push(page);
    currentX += 5;
    maxX += 5;
  }

  return (
    <div className="repo-container">
    {pages.map((page, i) =>
      <section id={"repo-page-" + i} className="repo-page">
      {page.map((item, x) =>
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
      </section>
    )}
    <div className={"btn-wrapper" + (numPages <= 1 ? " disable" : "")}>
    <a className="previous-btn" onClick={() => {console.log("prev")}}>
    <i class="fas fa-chevron-left"></i>
    </a>
    <a className="next-btn" onClick={() => {console.log("next")}}>
    <i class="fas fa-chevron-right"></i>
    </a>
    </div>
    </div>
  )
});

export default Repositories;
