
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

/*
export default class ScrollExample extends React.Component {
  render() {
    return (
      <div style={{ background: '#253237' }}>
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: '#805E73' }}
          />
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: '#87BCDE' }}
          />

          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url('stars', true),
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={1}
            style={{ pointerEvents: 'none' }}>
            <img
              src={welcome}
              style={{ display: 'block', width: '20%', marginLeft: '0%', float:'left',padding:'20% 0% 0% 0%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              src={logo}
              style={{ display: 'block', width: '20%', marginLeft: '55%' }}
            />
            <img
              src={logo}
              style={{ display: 'block', width: '10%', marginLeft: '15%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              src={logo}
              style={{ display: 'block', width: '20%', marginLeft: '70%' }}
            />
            <img
              src={logo}
              style={{ display: 'block', width: '20%', marginLeft: '40%' }}
            />
          </ParallaxLayer>



          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '60%' }}
            />
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '25%', marginLeft: '30%' }}
            />
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '10%', marginLeft: '80%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '5%' }}
            />
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '15%', marginLeft: '75%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={-0.4}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}>
            <img src={url('earth')} style={{ width: '60%' }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: '80%',
              backgroundPosition: 'center',
            }}
          />

          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <img
              src={study}
              style={{ display: 'block', width: '50%' }}
            />
            </ParallaxLayer>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >
          </ParallaxLayer>
        </Parallax>
      </div>
    )
  }
} 
*/


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
        <ParallaxLayer offset={0} speed={1} 
                       style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src={lbg} alt="lbg" style={{display: "block", width: "100%"}}/>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1} 
                       style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src={lbg} alt="lbg" style={{display: "block", width: "100%"}}/>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.1} 
                       style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src={logo} className= "App-logo" style={{display: 'block', width: "20%"}} alt=""/>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0}
                       style={{display: "flex", alignItems: "flex-end",
                               justifyContent: "flex-start"}}>
          <img src={welcome} style={{display: "block", width: "35%"}} alt=""/>
        </ParallaxLayer>

        <ParallaxLayer offset={0.1} speed={-.05} 
                       style={{display: "flex", alignItems: "flex-start",
                               justifyContent: "flex-start",
                               padding: "0% 0% 0% 9%"}}>
          <img src={hey} style={{display: "block", width: "22%"}} alt="hey"/>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0}
          style={{display: "flex", alignItems: "center",
          justifyContent: "center"}}>
          <img src={abg} alt="" style={{display: "block", width: "100%"}}/>
        </ParallaxLayer>
        
        <ParallaxLayer offset={2} speed={0.8}
          style={{display: "flex", alignItems: "center",
          justifyContent: "center"}}>
          <img src={abg} alt="" style={{display: "block", width: "100%"}}/>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0} 
          style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src={study} style={{display: 'block', width: '100%' }} alt=""/>
        </ParallaxLayer>



        <ParallaxLayer offset={2} speed={0.4}
          style={{display: "flex", alignItems: "flex-end",
            justifyContent: "flex-end"}}>
          <img src={sleep} alt="" style={{display: "block", width: "50%"}}/>
        </ParallaxLayer>
        
        <ParallaxLayer offset={2} speed={0.8} className = "about"
          style={{display: "flex", alignItems: "flex-end",
          justifyContent: "flex-end"}}>
          <h1>About Me</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.8} className = "about">
          <p>Whale whale whale</p>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-1}>
          <div id = "nav" className = "sicky" >
            <button className = "navbut" onClick={() => this.parallax.scrollTo(0)}>Home</button>
            <button onClick={() => this.parallax.scrollTo(1)}>Player</button>
            <button onClick={() => this.parallax.scrollTo(2)}>About</button>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.4} speed={-1}
          style={{display: 'flex', alignItems: 'flex-start',
            justifyContent: "flex-end"}}>
          <Share index={this.state.index}/>
        </ParallaxLayer>

        <ParallaxLayer id="mid" offset={1.75} speed={0.9}
          style={{display: 'flex', justifyContent: 'center'}}>
          <Song url="http://localhost:4200/get/song"
            indexCallback={this.updateSongIndex}
            pathCallback={this.updateSongPath}
          />
          <Save path={this.state.path}/>
        </ParallaxLayer>

      </Parallax>
      </div>
    );
  }
}

export default App;

