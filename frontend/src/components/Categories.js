import React from 'react';
import {Link} from 'react-router-dom';
import '../style/App.css';

const Categories = () => {
  return (
    <div className='container mt-5'>
      <div className='display-3 row p-4'>
        <Link className='link-no-style text-dark' to='/all'>All Posts</Link>
      </div>
      <div className='display-3 mt-3 row p-4'>
        <Link className='link-no-style text-dark' to='/react'>React Posts</Link>
      </div>
      <div className='display-3 mt-3 row p-4'>
        <Link className='link-no-style text-dark' to='/redux'>Redux Posts</Link>
      </div>
      <div className='display-3 mt-3 row p-4'>
        <Link className='link-no-style text-dark' to='/udacity'>Udacity Posts</Link>
      </div>
    </div>
  );
}

export default Categories;
