import React, { Component } from 'react';
import twIcon from "./assets/twIcon.png";
import fbIcon from "./assets/fbIcon.png";
import './styles.css';
// Share button(s) Component

class Share extends Component{
  constructor(props){
    super(props);
    this.getShareLink = this.getShareLink.bind(this);
    this.copyLink = this.copyLink.bind(this);
    this.tweet = this.tweet.bind(this);
    this.face = this.face.bind(this);
  }

  // Returns a link to our website at the current song
  getShareLink(){
    var shareLink = window.location.href;
    shareLink = shareLink.split('?')[0];
    shareLink = (shareLink + "?first=" + String(this.props.index));
    return(shareLink);
  }

  // Opens link argument and focuses on it
  open(link){
    var win = window.open(link);
    win.focus();
  }

  // Creates a textbox with the link and copies it to the clipboard
  copyLink(){
    var link = this.getShareLink();
    var input = document.createElement("input");
    var element = document.getElementById("linkdiv");
    element.appendChild(input);
    input.value = link;
    input.select();
    document.execCommand("Copy");
  }

  // Opens a tweet sharing our website
  tweet(){
    var link = this.getShareLink();
    // Format as a twitter link
    link = ("https://twitter.com/intent/tweet?url=" + link);
    link = (link + "&text=Check%20out%20this%20sick%20AI%20generated%20music%21");
    this.open(link);
  }

  // Opens a facebook post sharing our website
  face(){
    var link = this.getShareLink();
    // Format as a facebook link
    link = ("https://www.facebook.com/sharer/sharer.php?u=" + link);
    // This currently will give an error,
    //  from what I've deduced, this is because facebook doesn't share links
    //  to local host. It should be fixed when we are hosted properly
    this.open(link);
  }

  // Renders buttons which trigger press
  render(){
    return(
      <div>
        <div>
          <button onClick={this.copyLink}>Copy Link To Clipboard</button>
          <input type="image" onClick={this.tweet} src={twIcon} 
            height="5%" width="5%" alt="twitter">
          </input>
          <input type="image" onClick={this.face} src={fbIcon} 
            height="5%" width="5%" alt="facebook">
          </input>
        </div>
        <div id="linkdiv">
        </div>
      </div>
    )
  }
}

export default Share;