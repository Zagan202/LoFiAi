import React, { Component } from 'react';
import logo from './assets/logo.png';
//change music to Queue.pop
import music from './assets/guitar.mp3';
import Song from './Song'
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to LoFiAi</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        // url = route to be handled by back-end
        <Song url="http://localhost:4200/get/song" pollInterval={2000} />
      </div>
    );
  }
}

export default App;
