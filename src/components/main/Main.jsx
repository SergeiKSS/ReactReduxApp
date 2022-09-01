import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import Repo from './repo/Repo';

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos.items);

  useEffect(() => {
    dispatch(getRepos());
  }, [])

  return (
    <div className="app">
      {repos.map(repo => <Repo key={repo.id} repo={repo}/>)}
    </div>
  );
};

export default Main;