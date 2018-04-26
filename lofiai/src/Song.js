import React, { Component } from 'react';
import axios from 'axios'; // used for connection to database from front end
import music from './assets/guitar.mp3';
import './styles.css';

class Song extends Component {
  // initialize
  constructor(props){
    super(props);
    this.state = {data: [] };
    this.loadSongsFromServer = this.loadSongsFromServer.bind(this);
  }
  // fetches all song data from database and sets state to the response.
  loadSongsFromServer(){
    axios.get(this.props.url)
    .then(res => {
      this.setState({data: res.data});
    })
  }
  componentDidMount(){
    this.loadSongsFromServer();
    setInterval(this.loadSongsFromServer, this.props.pollInterval);
  }
  render() {
    // Audio player for each song
    let songNode = this.state.data.map(song => {
      console.log(song.path);
      return (
          <audio controls key={ song['_id'] }>
            <source src={song.path} type="audio/mpeg" />
          </audio>
      )      
    })
    return (
      <div>
      { songNode }
      </div>
    )
  }
} 

export default Song;