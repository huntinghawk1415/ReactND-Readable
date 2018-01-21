import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg sticky-top navbar-dark bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href='#'>Readable</a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarToggleExternalContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Posts</a>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link' href='#'>Profile</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Login/Logout</a>
            </li>
          </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar;
