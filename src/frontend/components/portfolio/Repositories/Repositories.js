import React, { useState, useEffect } from 'react';

import '../../../styles/root.scss';

import LoadingIndicator from '../../ui/LoadingIndicator';
import RepositoriesList from './RepositoriesList';

const Repositories = (props) => {
  const [repoData, setRepoData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const handlePages = (pages, action, id, callback) => {
    const splitName = id.split("-");
    const currentPageNum = parseInt(splitName[2]);
    let nextPageNum;

    if (action === -1 && currentPageNum === 0) { // Go to last page
      nextPageNum = pages - 1;
    } else if (action === 1 && (currentPageNum + 1) === pages) { // Go to first page
      nextPageNum = 0;
    } else {
      nextPageNum = currentPageNum + action;
    }

    const nextPageId = splitName[0] + "-" + splitName[1] + "-" + nextPageNum.toString();

    const currentPage = document.getElementById(id);
    const nextPage = document.getElementById(nextPageId);

    currentPage.style.opacity = '0';
    setTimeout(() => {
      currentPage.style.display = 'none';
      nextPage.style.display = 'block';
    }, 350)
    nextPage.style.opacity = '1';

    callback(nextPageId);
  }

  useEffect(() => {
    const request = 'https://api.github.com/users/Sam-RP1/repos';

    fetch(request)
    .then((res) => res.json())
    .then((data) => {
      const repoArr = [];

      // Sort Repos by latest commit date
      data.sort((a, b) => {
        return (a.pushed_at < b.pushed_at) ? 1 : ((a.pushed_at > b.pushed_at) ? -1 : 0);
      });

      // Extract data for each Repo & push to repoArr
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
    {isLoading === false && <RepositoriesList repoData={repoData} handlePages={handlePages} />}
    </div>
  )
};

export default Repositories;
