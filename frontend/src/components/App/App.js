import React, { Component } from 'react';
import Navbar from './Navbar';
import {Route, Redirect} from 'react-router-dom';
import {fetchPosts} from '../../ProjectAPI';
import Home from '../Home';
import Posts from '../Posts';
import Profile from '../Profile';
import Login from '../Login';
import '../../style/App.css';

class App extends Component {
  state = {
    access: true
  }
  componentDidMount() {
    fetchPosts();
  }
  render() {
    const {access} = this.state
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
      </div>
    );
  }
}

export default App;
