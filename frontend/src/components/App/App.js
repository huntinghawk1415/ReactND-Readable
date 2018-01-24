import React, { Component } from 'react';
import Navbar from './Navbar';
import {Route, Redirect, Link} from 'react-router-dom';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import Home from '../Home/Home';
import Posts from '../Posts';
import Profile from '../Profile';
import Login from '../Login';
import '../../style/App.css';

class App extends Component {
  state = {
    access: true
  }
  render() {
    const {access} = this.state
    return (
      <div className='container-fluid app-settings'>
        <div className='full-view'>
          <Navbar />
          <div>
            <Route
              exact path='/'
              component={Home}
            />
            <Route
              path='/posts'
              component={Posts}
            />
            <Route
              path='/profile'
              render={() => (
                !access
                  ? <Redirect to='/login' />
                  : <Profile />
              )}
            />
            <Route
              path='/login'
              component={Login}
            />
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <Link to='/create-comment'>
              <MdAddCircleOutline
                size={60}
                className='text-dark'
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
