import React, { useState } from 'react';

import '../../../styles/root.scss';

const RepositoriesList = React.memo((props) => {
  const [openPage, setOpenPage] = useState("repo-page-0");
  const { repoData, handlePages } = props;
  const pages = [];
  const reposPerPage = 5;
  const numPages = Math.ceil(repoData.length / reposPerPage);
  let currentRepoNum = 0;
  let maxRepoNum = currentRepoNum + reposPerPage;

  // Create Pages
  for (let i = 0; i < numPages; i++) {
    let pageContents = [];
    for (let x = currentRepoNum; x < maxRepoNum; x++) {
      if (x === repoData.length) {
        break;
      } else {
        pageContents.push(repoData[x]);
      }
    }
    pages.push(pageContents);
    currentRepoNum += reposPerPage;
    maxRepoNum += reposPerPage;
  }

  return (
    <>
    {pages.map((page, i) =>
      <section key={"repo-page-" + i} id={"repo-page-" + i} className="repo-page">
      {page.map((item, x) =>
        <div key={item.id} className="repo">
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
    <a className="previous-btn" onClick={() => {handlePages(numPages, -1, openPage, setOpenPage)}}>
    <i className="fas fa-chevron-left"></i>
    </a>
    <a className="next-btn" onClick={() => {handlePages(numPages, 1, openPage, setOpenPage)}}>
    <i className="fas fa-chevron-right"></i>
    </a>
    </div>
    </>
  )
});

export default RepositoriesList;
