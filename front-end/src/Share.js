import React, { Component } from 'react';
import twIcon from './assets/twIcon.svg';
import fbIcon from './assets/fbIcon.svg';
import cbIcon from './assets/clipboard.svg';
import './styles.css';
// Share button(s) Component

class Share extends Component{
  constructor(props){
    super(props);
    this.state = {visible: false};
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
    var element = document.getElementById("linkdiv");
    var input = document.createElement("input");
    input.size = "6";
    element.appendChild(input);
    input.value = link;
    input.select();
    document.execCommand("Copy");
    element.removeChild(input);
    // Now for the notice
    this.setState({visible: true});
    setTimeout( function() {this.setState({visible: false});}.bind(this), 1000);
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
    this.open(link);
  }

  notice(){
    console.log(this.state.visible)
    if(this.state.visible === true){
      return("Link Copied To Clipboard");
    }else{
      return("");
    }
  }

  // Renders share buttons
  render(){
    return(
      <div style={{display: "block", padding: ".8%1%.8%1%"}}>
        <div>
        <img alt="clipboard" onClick={this.copyLink} src={cbIcon}
            height="1.5%" width="1.5%" style={{float: "right", padding: ".05%.5%.25%.5%"}}>
          </img>
        </div>
        <div id="linkdiv" style={{visibility: "visible"}}/>
        <div>
          <img alt="facebook" onClick={this.face} src={fbIcon}
            height="1.5%" width="1.5%" style={{float: "right", padding: ".25%.5%.25%.5%"}}>
          </img>
        </div>
        <div>
          <img alt="twitter" onClick={this.tweet} src={twIcon}
            height="1.5%" width="1.5%" style={{float: "right", padding: ".25%.5%.25%.5%"}}>
          </img>
        </div>
        <div>
          <p>
            <span id="notice" className="notice">
             {this.notice()}
            </span>
          </p>
        </div>
      </div>
    )
  }
}

export default Share;
