import React, { Component } from 'react';
import 'whatwg-fetch';

import Intro from '../Intro'
import './App.css';
import Series from '../../containers/Series';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all of your most loved series"/>
        <Series />
      </div>
    );
  }
}

export default App;
