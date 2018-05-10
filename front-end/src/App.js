import React, { Component } from 'react';
import logo from './assets/logo.png';
import Song from './Song.js';
import Share from './Share.js';
import './styles.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {index: null};
    this.updateSongIndex = this.updateSongIndex.bind(this);
  }

  updateSongIndex(songIndex){
    this.setState({index: songIndex});
  }
  
  render() {
    return (
      <div className="App">
        <div className = "top">LoFiAi (Top Navigation?)</div>
          <img src={logo} className="App-logo" alt="logo"/>
        <div className = "mid">
          <Song url="http://localhost:4200/get/song" callback={this.updateSongIndex}/>
          <Share index={this.state.index}/>
        </div>
        <div className = "about">Whale whale whale</div>
      </div>
    );
  }
}

export default App;
