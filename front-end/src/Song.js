// Song player component
import React, { Component } from 'react';
// Used for connection to database from front end
import axios from 'axios';
import './styles.css';
import pause from './assets/pause.svg'
import play from './assets/play.svg'

class Song extends Component {
  constructor(props){
    super(props);
    // data: array of all song paths
    // first: initial song to play
    this.state = {data: [], first: null};
    this.playNext = this.playNext.bind(this);
    this.second = this.second.bind(this);
    this.duration = this.duration.bind(this);
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

  // Send the current duration to App when it changes
  duration(){
    var playerElement = document.getElementById("player");
    if(isNaN(playerElement.duration)){
      this.props.lengthCallback(0);
    }else{
      this.props.lengthCallback(playerElement.duration);
    }
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
    this.props.lengthCallback(playerElement.duration);
    playerElement.play();
  }

  // Send current time to App every second
  second(){
    var playerElement = document.getElementById("player");
    if(isNaN(playerElement.currentTime)){
      this.props.timeCallback(0);
    }else{
      this.props.timeCallback(playerElement.currentTime);
    }
  }

  // Plays or pauses audio when the play/pause button is clicked
  playButton(){
    var playerElement = document.getElementById("player");
    var pauseElement = document.getElementById("pause");
    if(playerElement.paused === true){
      playerElement.play();
      pauseElement.src = pause;
    }else{
      playerElement.pause();
      pauseElement.src = play;
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
        <div style={{display: "flex", alignItems: "center"}}>
          <audio id="player" ref="player" onDurationChange={this.duration}
            onEnded={this.playNext} onTimeUpdate={this.second}>
            <source src={this.state.data[this.state.first].path} type="audio/mpeg"/>
          </audio>
            <img id="pause" src={play} alt="Play/Pause" onClick={this.playButton}
              width="20%" height="20%" style={{float: "left"}}>
            </img>
            <input id="vol" className="slider" type="range" min="0" max="100"
              defaultValue="100" onInput={this.changeVolume}>
            </input>
          </div>
      )
    }
    return(<div/>);
  }
}

export default Song;