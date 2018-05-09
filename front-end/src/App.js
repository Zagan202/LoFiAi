import React, { Component } from 'react';
import logo from './assets/logo.png';
import Song from './Song'
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className = "top">LoFiAi (Top Navigation?)</div>
          <img src={logo} className="App-logo" alt="logo" />
      <div className = "mid">
        <Song url="http://localhost:4200/get/song"/>
      </div>
      <div className = "about">Whale whale whale</div>
      </div>
    );
  }
}

export default App;
