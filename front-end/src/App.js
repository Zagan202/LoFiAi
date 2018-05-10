import React, { Component } from 'react';
import logo from './assets/logo.png';
import Song from './Song'
import './styles.css';

class App extends Component {


	
  render() {
	  
    return (
	
      <div className = "App">
      <img src={logo} className="App-logo" alt="logo" />
	  <div className = "navbar">
      <a class = "active" href = "javascript:void(0)">Home</a>
      <a href = "javascript:void(0)">Player</a>
      <a href = "javascript:void(0)">About</a>
      </div>
      <div className = "mid">
      <Song url="http://localhost:4200/get/song" pollInterval={2000} />
      </div> {/* mid end */}
      <div className = "about">Whale whale whale</div>
      </div> /* app end */

    );
  }
}

export default App;
