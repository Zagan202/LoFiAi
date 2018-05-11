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
  
  // Triggers after first render
  componentDidMount(){
    window.onscroll = function() {checkSticky()};
    // Checks if navbar is offset enough to stick to the top
    function checkSticky(e){
      var navbarElement = document.getElementById("nav");
      console.log(navbarElement);
      var stickHeight = navbarElement.offsetTop;
      if (window.pageYOffset >= stickHeight) {
        navbarElement.classList.add("sticky")
      } else {
        navbarElement.classList.remove("sticky");
      }
    }
  }
  
  render() {
    return (
      <div className="App">
        <img id = "logo" src={logo} className="App-logo" alt="logo" />
        <div id = "nav" className = "navbar">
          <a className = "active" href = "#logo">Home</a>
          <a href = "#mid" >Player</a>
          <a href = "#about">About</a>
        </div>
        <div id="mid" className = "mid">
          <Song url="http://localhost:4200/get/song" 
                indexCallback={this.updateSongIndex}
                pathCallback={this.updateSongPath}/>
          <Share index={this.state.index}/>
          <Save path={this.state.path}/>
        </div>
        <div id="about" className = "about">
          Whale whale whale
        </div>
      </div>
    );
  }
}

export default App;
