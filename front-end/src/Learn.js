import React, { Component } from 'react';
import './styles.css';

class Learn extends Component {
  constructor(props){
    super(props);
  }

  closeInfo(){
    var element = document.getElementById("info");

  }

  deepLearningInfo(){
    var element = document.getElementById("info");
    var p1 = document.createElement("p");
    var node = document.createTextNode("Deep Learning is a segment of artificial intelligence that attempts to replicate that way that humans learn and gain knowledge. This is done by sophisticated automation techniques known as predictive analysis. Predictive analysis uses new and past information to assign values to the likelihood of future events.");
    p1.appendChild(node);
    element.appendChild(p1);
  }

  render(){
    return(
      <div>
        <div className="navbar">
          <button onClick={this.deepLearningInfo}>What is Deep Learning?</button>
          <button>What are Neural Networks</button>
          <button>What is WaveNet and Why do we use it?</button>
          <button>What are other alternatives to ML with Music?</button>
          <button>What do the different parameters mean?</button>
          <button>What platform is training done on?</button>
          <button>Pitfalls discovered while training</button>
        </div>
        <div id="info" className="about"></div>
      </div>
    );
  }
}

export default Learn;