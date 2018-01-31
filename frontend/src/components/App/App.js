import React, { Component } from 'react';
import Navbar from './Navbar';
import {Switch, Route, Link} from 'react-router-dom';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import Home from '../Home/Home';
import Posts from '../Posts/Posts';
import SpecificPost from '../SpecificPost';
import NewPost from '../NewPost';
import NewComment from '../NewComment';
import '../../style/App.css';

class App extends Component {
  render() {
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
                path='/create-post'
                component={NewPost}
              />
              <Route
                exact path='/:id'
                component={SpecificPost}
              />
              <Route
                exact path='/:id/create-comment'
                component={NewComment}
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
