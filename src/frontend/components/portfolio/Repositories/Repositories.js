'use strict';

import React, { useState, useEffect } from 'react';

import '../../../styles/root.scss';

import LoadingIndicator from '../../ui/LoadingIndicator';
import RepositoriesList from './RepositoriesList';

const Repositories = (props) => {
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
    {isLoading && <LoadingIndicator/>}
    {isLoading === false && <RepositoriesList repoData={repoData} />}
    </div>
  )
};

export default Repositories;
