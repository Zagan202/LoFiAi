import React, { Component } from 'react';
import logo from './assets/logo.png';
import Song from './Song.js';
import Share from './Share.js';
import Save from './Save.js';
import './styles.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {index: null, path: null};
    this.updateSongIndex = this.updateSongIndex.bind(this);
    this.updateSongPath = this.updateSongPath.bind(this);
  }

  // Function called by Song to store its index in App's state
  updateSongIndex(songIndex){
    this.setState({index: songIndex});
  }

  //Function called by Song to store its file paths in App's state
  updateSongPath(SongPath){
    console.log("path = " + SongPath);
    this.setState({path: SongPath});
  }
  
  render() {
    return (
      <div className="App">
        <div className = "top">LoFiAi (Top Navigation?)</div>
          <img src={logo} className="App-logo" alt="logo"/>
        <div className = "mid">
          <Song url="http://localhost:4200/get/song" 
                indexCallback={this.updateSongIndex}
                pathCallback={this.updateSongPath}/>
          <Share index={this.state.index}/>
          <Save path={this.state.path}/>
        </div>
        <div className = "about">Whale whale whale</div>
      </div>
    );
  }
}

export default App;
