'use strict';

import React, { useState, useEffect } from 'react';

import '../../styles/root.scss';

import LoadingIndicator from '../ui/LoadingIndicator';
import Slider from '../Slider/Slider';

const Repositories = React.memo((props) => {
  const [repoData, setRepoData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const request = 'https://api.github.com/users/Sam-RP1/repos';

    fetch(request)
    .then((res) => res.json())
    .then((data) => {
      const repoArr = [];

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
        repoArr.push(entry);
      }

      setRepoData(repoArr);
      setLoading(false);
    })
    .catch((error) => console.log('Problem fetching data'))
  }, [])

  return (
    <div className="repo-container">
    {isLoading && <LoadingIndicator />}
    {isLoading === false && <Slider
      name={"repo"}
      itemsPerSlide={2}
      transition={"slide-in-out"}
      >
      {repoData.map((repo, i) =>
        <div key={repo.id} className="repo">
        <h2>{repo.title}</h2>
        <div className="repo-content">
        <div className="info-wrapper">
        <div>
        <p>Created:</p>
        <p>{repo.created}</p>
        </div>
        <div>
        <p>Last Commit:</p>
        <p>{repo.updated}</p>
        </div>
        </div>
        <div className="icons-wrapper">
        <a href={repo.webUrl} target="_blank" style={{display: (repo.webUrl === null ? "none" : "")}}><i className="fas fa-link"></i></a>
        <a href={repo.repoUrl} target="_blank"><i className="fab fa-github"></i></a>
        </div>
        </div>
        </div>
      )}
      </Slider>
    }
    </div>
  )
});

export default Repositories;
