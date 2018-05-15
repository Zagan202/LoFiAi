
import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring'
import './styles.css'
import logo from './assets/logo.png';
import Song from './Song.js'
import Share from './Share.js'
import Save from './Save.js'

const url = (name, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`
const Pink = ({ children }) => (
  <span style={{ color: '#FF6AC1' }}>{children}</span>
)
const Yellow = ({ children }) => (
  <span style={{ color: '#EFF59B' }}>{children}</span>
)
const Lightblue = ({ children }) => (
  <span style={{ color: '#9AEDFE' }}>{children}</span>
)
const Green = ({ children }) => (
  <span style={{ color: '#57EE89' }}>{children}</span>
)
const Blue = ({ children }) => (
  <span style={{ color: '#57C7FF' }}>{children}</span>
)
const Gray = ({ children }) => (
  <span style={{ color: '#909090' }}>{children}</span>
)

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

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '10%', marginLeft: '10%' }}
            />
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '75%' }}
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
            {/*This is inception*/}
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

/*
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

  // Triggers after first render
  componentDidMount(){
    window.onscroll = function() {checkSticky()};
    // Checks if navbar is offset enough to stick to the top
    function checkSticky(e){
      var navbarElement = document.getElementById("nav");
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
/*
export default App;
*/
