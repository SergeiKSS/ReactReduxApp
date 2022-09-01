import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import Repo from './repo/Repo';
import './main.less';

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos.items);
  const isFetching = useSelector(state => state.repos.isFetching);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatch(getRepos());
  }, [])

  const searchHandler = () => {
    dispatch(getRepos(searchValue));
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
          repos.map(repo => <Repo key={repo.id} repo={repo}/>)}
    </div>
  );
};

export default Main;