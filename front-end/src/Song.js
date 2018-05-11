import React, { Component } from 'react';
import axios from 'axios'; // used for connection to database from front end

import './styles.css';

class Song extends Component {
  // initialize
  constructor(props){
    super(props);
    this.state = {data: [], index: 0};
    this.loadSongsFromServer = this.loadSongsFromServer.bind(this);
    this.playNext = this.playNext.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  // Fetches all song data from database and sets state to the response.
  loadSongsFromServer(){
    axios.get(this.props.url)
    .then(res => {
      this.setState({data: res.data});
    })
  }

  // Set this.index to a random index in this.data
  shuffle(){
    var numTracks = this.state.data.length;
    this.setState({index: Math.floor(Math.random() * numTracks)});
  }

  // Loads songs before first render
  componentWillMount(){
    this.loadSongsFromServer();
  }
  
  // Change src to the next path in data and play
  playNext(e){
    var playerElement = document.getElementById("player");
    playerElement.currentTime = 0;
    this.shuffle();
    playerElement.play();
  }

  // Renders the audio player
  render() {
    if(this.state.data.length > 0){
      return (
        <div>
         <audio controls id="player" onEnded={this.playNext}>
           <source src={this.state.data[this.state.index].path} type="audio/mpeg"/>
          </audio>
        </div>
      )
    }
    return(<div></div>);
  }
}

export default Song;