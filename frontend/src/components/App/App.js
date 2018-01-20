import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from '../Home';
import '../../style/App.css';

class App extends Component {
  state = {
    view: 'home'
  }
  render() {
    const {view} = this.state;
    return (
      <div className='container height-100'>
        <Navbar />
        <div>{
          view === 'home'
            ? <Home />
            : null
        }</div>
      </div>
    );
  }
}

export default App;
