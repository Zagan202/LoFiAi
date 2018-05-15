import React, { Component } from 'react';
import axios from 'axios'; // used for connection to database from front end

import './styles.css';

class Song extends Component {
  // Initialize
  constructor(props){
    super(props);
    // data: array of all song paths
    // first: initial song to play
    this.state = {data: [], first: null};
    this.playNext = this.playNext.bind(this);
  }

  // Returns song index from URL (?first=_#) or -1 if none exists
  getUrlParam(){
    var url = window.location.href;
    url = url.split('?')[1];
    if(url){
      url = url.split('#')[0];
      if(url){
        url = url.split('=')[1];
        if(url){
          return(parseInt(url, 10));
        }
      }
    }
    return(-1);
  }

  // Set data and first before audio player renders
  componentWillMount(){
    var urlFirst = this.getUrlParam();
    // Get songs from the database
    // Then assign those songs to State.data
    // And set first to random, or urlFirst if possible
      axios.get(this.props.url)
      .then( res => {
        if(urlFirst < 0 || urlFirst > (res.data.length - 1)){
          // Variable for random first set here for transfer to App.js
          var randomFirst = Math.floor(Math.random() * res.data.length);
          this.props.indexCallback(randomFirst);
          this.props.pathCallback(res.data[randomFirst].path);
          this.setState({data: res.data, first: randomFirst});
        }else{
          this.props.indexCallback(urlFirst);
          this.props.pathCallback(res.data[urlFirst].path);
          this.setState({data: res.data, first: urlFirst});
        }
      })
      
  }
  
  // Randomly select next song path and play it
  playNext(){
    var playerElement = document.getElementById("player");
    playerElement.currentTime = 0;
    var numTracks = this.state.data.length;
    var index = (Math.floor(Math.random() * numTracks));
    this.props.indexCallback(index);
    this.props.pathCallback(this.state.data[index].path);
    playerElement.src = this.state.data[index].path;
    playerElement.play();
  }

  // Plays or pauses audio when the play/pause button is clicked
  playButton(){
    var playerElement = document.getElementById("player");
    if(playerElement.paused === true){
      playerElement.play();
    }else{
      playerElement.pause();
    }
  }

  // Changes audio volume based on slider
  changeVolume(){
    var playerElement = document.getElementById("player");
    var volumeElement = document.getElementById("vol");
    playerElement.volume = (volumeElement.value / 100);
  }

  // Renders the audio player
  render() {
    // Necessary to avoid rendering before song paths have loaded
    if(this.state.data.length > 0){
      return (
        <div>
          <audio id="player" onEnded={this.playNext}>
            <source src={this.state.data[this.state.first].path} type="audio/mpeg"/>
          </audio>
          <button onClick={this.playButton}>Play/Pause</button>
          <input id="vol" type="range" min="0" max="100" defaultValue="100"
            onInput={this.changeVolume}>
          </input>
        </div>
      )
    }
    return(<div></div>);
  }
}

export default Song;