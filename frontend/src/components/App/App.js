import React, { Component } from 'react';
import Navbar from './Navbar';
import {Route, Redirect} from 'react-router-dom';
import Home from '../Home';
import Posts from '../Posts';
import Profile from '../Profile';
import Login from '../Login';
import '../../style/App.css';

class App extends Component {
  state = {
    loggedIn: false,
  }
  render() {
    const {loggedIn} = this.state;
    return (
      <div className='container-fluid default-settings'>
        <Navbar />
        <div className='h-100'>
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
              loggedIn ? (
                <Profile />
              ) : (
                <Redirect to="/login"/>
              )
            )}/>
          <Route
            path='/login'
            component={Login}
          />
        </div>
      </div>
    );
  }
}

export default App;
