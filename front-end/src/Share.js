import React, { Component } from 'react';
import './styles.css';
// Share button(s) Component

class Share extends Component{
  constructor(props){
    super(props);
    this.press = this.press.bind(this);
  }

  // Creates link with first parameter set to curent song
  press(){
    var shareLink = window.location.href;
    shareLink = shareLink.split('?')[0];
    shareLink = (shareLink + "?first=" + String(this.props.index));
    // Below will be replaced with presenting the user with shareLink for social media
    console.log(shareLink);
  }

  // Renders buttons which trigger press
  render(){
    return(
      <div>
        <button onClick={this.press}>Share</button>
      </div>
    )
  }
}

export default Share;