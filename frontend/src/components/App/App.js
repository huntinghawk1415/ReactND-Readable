import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from '../Home';
import Posts from '../Posts';
import Profile from '../Profile';
import '../../style/App.css';

class App extends Component {
  state = {
    view: 'profile'
  }
  render() {
    const {view} = this.state;
    return (
      <div className='container-fluid default-settings'>
        <Navbar />
        <div className='h-100'>{
          view === 'home'
            ? <Home />
            :
          view === 'posts'
            ? <Posts />
            :
          view === 'profile'
            ? <Profile />
            : null
        }</div>
      </div>
    );
  }
}

export default App;
