import React, { Component } from 'react';
import './styles.css';
// Save button compoenent

class Save extends Component{
  constructor(props){
    super(props);
    this.press = this.press.bind(this);
  }

  // Triggers when button is pressed
  press(){
    console.log(this.props.path);
  }

  // Renders button which triggers press
  render(){
    return(
      <div>
        <button onClick={this.press}/>
        <p>save</p>
      </div>
    )
  }
}

export default Save;