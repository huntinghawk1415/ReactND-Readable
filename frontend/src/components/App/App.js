import React, { Component } from 'react';
import Navbar from './Navbar';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import Home from '../Home/Home';
import Posts from '../Posts/Posts';
import Profile from '../Profile';
import Login from '../Login';
import SpecificPost from '../SpecificPost';
import NewPost from '../NewPost';
import '../../style/App.css';

class App extends Component {
  state = {
    access: true
  }
  render() {
    const {access} = this.state;
    return (
      <div className='container-fluid app-settings'>
        <div className='full-view'>
          <Navbar />
          <div>
            <Switch>
              <Route
                exact path='/'
                component={Home}
              />
              <Route
                exact path='/posts'
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
              <Route
                path='/create-post'
                component={NewPost}
              />
              <Route
                path='/:id'
                component={SpecificPost}
              />
            </Switch>
          </div>
          <div className='text-right fixed-bottom pr-1 pb-1'>
            <Link 
              to='/create-post' 
                title='Create a post'
            ><MdAddCircleOutline
                size={50}
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
