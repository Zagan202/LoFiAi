// About page component

import React, { Component } from 'react';
import './styles.css';

class About extends Component {

  render(){
    return(
      <div className = "about" align="left">
        <p>
          LoFiAi (loe-fy-ay-eye) is a platform for curious listeners
          <br/>
          to hear music composed by artificial intelligence.
          <br/>
          Inspired by advancements made with Deep Learning and love of music,
          <br/>
          the Neural Network learns and generates its interpretation of the
          <br/>
          given music. 
          <br/>
          <br/>
          The founding LoFiAi-Team is a network of<br/>
          six Computer Science undergraduates from UCSC
        </p>
        <p align="left">
          <a href="https://www.linkedin.com/in/lawrence-lawson/" target="_blank"
            rel="noopener noreferrer">
            Lawrence Lawson
          </a>
          <br/>
          <a href="https://github.com/ajperrot" target="_blank"
            rel="noopener noreferrer">
            Alex Perrotti
          </a>
          <br/>
          <a href="https://github.com/chesmend" target="_blank"
            rel="noopener noreferrer">
            Christopher Mendoza
          </a>
          <br/>
          <a href="https://github.com/karengl" target="_blank"
            rel="noopener noreferrer">
            Karen Lee
          </a>
          <br/>
          <a href="https://github.com/vyao95" target="_blank"
            rel="noopener noreferrer">
            Vincent Yao
          </a>
          <br/>
          <a href="https://jcatajoy.myportfolio.com/" target="_blank"
            rel="noopener noreferrer">
            Janel Catajoy
          </a>
          <br/>
        </p>
      </div>
    );
  }
}

export default About;