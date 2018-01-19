import React, { Component } from 'react';
import Home from './Home';
import '../style/App.css';

class App extends Component {
  state = {
    view: 'home'
  }
  render() {
    const {view} = this.state;
    return (
      <div className='container-fluid'>{
        view === 'home'
          ? <Home />
          : null
      }</div>
    );
  }
}

export default App;
