import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import Repo from './repo/Repo';
import './main.less';
import { setCurrentPage } from '../../reducers/reposReducer';

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos.items);
  const isFetching = useSelector(state => state.repos.isFetching);
  const currentPage = useSelector(state => state.repos.currentPage);
  const perPage = useSelector(state => state.repos.perPage);
  const totalCount = useSelector(state => state.repos.totalCount);
  const [searchValue, setSearchValue] = useState('');

  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = [];

  if(pagesCount > 10) {
    if(currentPage > 5) {
        for (let i = currentPage-4; i <= currentPage+5; i++) {
            pages.push(i)
            if(i == pagesCount) break
        }
    }
    else {
        for (let i = 1; i <= 10; i++) {
            pages.push(i)
            if(i == pagesCount) break
        }
    }
  }  else {
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
  }

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage));
  }, [currentPage])

  const searchHandler = () => {
    dispatch(setCurrentPage(1));
    dispatch(getRepos(searchValue, currentPage, perPage));
  }

  return (
    <div className="app">
      <div className='search'>
        <input 
          type="text"
          placeholder='Type repo name'
          className='search-input'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={() => searchHandler()} className='search-btn'>Search</button>
      </div>
      { isFetching 
        ? (
          <div className='fetching'></div>) 
        :
          repos.map(repo => <Repo key={repo.id} repo={repo}/>)
      }
      <div className='pages'>
        {pages.map((page, index) => (
          <span 
            key={index} 
            className={currentPage === page ? 'current-page' : 'page'}
            onClick={() => dispatch(setCurrentPage(page))}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Main;