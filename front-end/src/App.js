
import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring';
import './styles.css';
import abg from './assets/abg.svg';
import lbg from './assets/lbg.svg';
import hey from './assets/hey.svg';
import logo from './assets/logo.svg';
import sleep from './assets/sleep.svg';
import study from './assets/study.jpg';
import welcome from './assets/welcome.svg';
import Song from './Song.js';
import Share from './Share.js';
import Save from './Save.js';

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
    this.setState({path: SongPath});
  }

  render() {
    return (
      <div>
      <Parallax className="App" ref={ref => (this.parallax = ref)} pages={3}>
      
        {/* Landing page background*/}
        <ParallaxLayer offset={0} speed={0.1} 
          style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img src={lbg} alt="top bg" style={{display: "block", width: "100%"}}/>
        </ParallaxLayer>

        {/* Logo*/}
        <ParallaxLayer offset={0} speed={-0.1} 
          style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img src={logo} alt="logo" className= "App-logo" 
            style={{display: "block", width: "20%"}}/>
        </ParallaxLayer>

        {/* Lofi v for victory pose*/}
        <ParallaxLayer offset={0} speed={0}
          style={{display: "flex", alignItems: "flex-end",
                  justifyContent: "flex-start"}}>
          <img src={welcome} alt="welcome" style={{display: "block", width: "35%"}}/>
        </ParallaxLayer>

        {/* Black line at the bottom of offset 0*/}
        <ParallaxLayer offset={0} speed={0}  width="100%" height="1px"
          style={{display: "flex", alignItems: "flex-end"}}>
          <div style={{display: "block", width: "100%", height: "1%", background: "#000000"}}>
          </div>
        </ParallaxLayer>

        {/* Player page background, Lofi studying*/}
        <ParallaxLayer offset={1} speed={0} 
          style={{display: "flex", alignItems: "flex-start", justifyContent: "center"}}>
          <img src={study} alt="study" style={{display: "block", width: "100%"}}/>
        </ParallaxLayer>

        {/* "Hey" speech bubble*/}
        <ParallaxLayer offset={0.1} speed={-.05} 
          style={{display: "flex", alignItems: "flex-start",
                  justifyContent: "flex-start", padding: "0% 0% 0% 20%"}}>
          <img src={hey} alt="hey" style={{display: "block", width: "22%"}}/>
        </ParallaxLayer>

        {/* About page background i.e. the desk */}
        <ParallaxLayer offset={2} speed={0.8}
          style={{display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
          <img src={abg} alt="desk" style={{display: "block", width: "100%"}}/>
        </ParallaxLayer>

        {/* About page art of Lofi sleeping*/}
        <ParallaxLayer offset={2} speed={0.4}
          style={{display: "flex", alignItems: "flex-end", justifyContent: "flex-end"}}>
          <img src={sleep} alt="" style={{display: "block", width: "50%"}}/>
        </ParallaxLayer>

        {/* About page text */}
        <ParallaxLayer offset={2.1} speed={0.8}
        style={{display: "flex", alignContent: "flex-end", padding: "0% 0% 0% 10%"}}>
          <p className = "about">About...</p>
        </ParallaxLayer>

        {/* Navbar*/}
        <ParallaxLayer offset={0} speed={-1}>
          <div id = "nav" className = "navbar">
            <button onClick={() => this.parallax.scrollTo(0)}>Home</button>
            <button onClick={() => this.parallax.scrollTo(1)}>Player</button>
            <button onClick={() => this.parallax.scrollTo(2)}>About</button>
          </div>
        </ParallaxLayer>

        {/* Share buttons*/}
        <ParallaxLayer offset={0.4} speed={-1}
          style={{display: "flex", alignItems: "flex-start", justifyContent: "flex-end"}}>
          <Share index={this.state.index}/>
        </ParallaxLayer>

        {/* Song player and save button*/}
        <ParallaxLayer id="mid" offset={1.75} speed={0.9}
          style={{display: "flex", justifyContent: "center"}}>
          <div style={{float: "left"}}>
          <Song url="http://localhost:4200/get/song"
            indexCallback={this.updateSongIndex}
            pathCallback={this.updateSongPath}/>
          </div>
          <div>
          <Save path={this.state.path}/>
          </div>
        </ParallaxLayer>

      </Parallax>
      </div>
    );
  }
}

export default App;

