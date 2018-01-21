import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from '../Home';
import Posts from '../Posts';
import '../../style/App.css';

class App extends Component {
  state = {
    view: 'home'
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
            : null
        }</div>
      </div>
    );
  }
}

export default App;
