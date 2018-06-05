// Save button compoenent

import React, { Component } from 'react';
import './styles.css';
import saveIcon from './assets/save.svg';

class Save extends Component{
  constructor(props){
    super(props);
    this.press = this.press.bind(this);
  }

  // Triggers when button is pressed
  press(){
    let FileSaver = require('file-saver');
    let file = new File([this.props.path], {type: "audio/mpeg"});
    // Use the filename after the last "/" in the url
    let fileName = this.props.path.substring(this.props.path.lastIndexOf("/") + 1);
    FileSaver.saveAs(file, fileName);
  }

  render(){
    return(
      <div>
        <img src={saveIcon} alt="save" onClick={this.press}
          width="70%" height="70%">
        </img>
      </div>
    )
  }
}

export default Save;