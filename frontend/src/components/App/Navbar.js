import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md sticky-top navbar-dark bg-dark'>
      <div className='container'>
        <Link
          className='navbar-brand'
          to='/'
        >Readable</Link>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/'
            >Home</Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='posts'
            >Posts</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
