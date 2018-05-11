import React, { Component } from 'react';
import logo from './assets/logo.png';
import Song from './Song'
import './styles.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {mounted: false};
    //this.checkSticky = this.checkSticky.bind(this);
  }

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
	
      <div className = "App">
        <img id = "logo" src={logo} className="App-logo" alt="logo" />
	      <div id = "nav" className = "navbar">
          <a className = "active" href = "#logo">Home</a>
          <a href = "#mid" >Player</a>
          <a href = "#about">About</a>
        </div>
        <div id="mid" className = "mid">
          <Song url="http://localhost:4200/get/song"/>
        </div> {/* mid end */}
        <div id="about" className = "about">Whale whale whale</div>
        </div> /* app end */

    );
  }
}

export default App;
