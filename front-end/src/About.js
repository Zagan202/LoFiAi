import React, { Component } from 'react';
import './styles.css';

class About extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div className = "about" align="left" >
            <p>LoFiAi (loe-fy-ay-eye) is a platform for curious listeners<br />
             to hear music composed by artificial intelligence.<br />
             Inspired by advancements made with Deep Learning and love of music,<br />
             the Neural Network learns and generates its interpretation of the <br />
             given music. <br /><br />
             The founding LoFiAi-Team is a network of
             <br />six Computer Science undergraduates from UCSC</p>
          <p align="left"><a href="https://www.linkedin.com/in/lawrence-lawson/" target="_blank">Lawrence Lawson</a><br />
          <a href="https://github.com/ajperrot" target="_blank">Alex Perrotti</a><br />
          <a href="https://github.com/chesmend" target="_blank">Christopher Mendoza</a><br />
          <a href="https://github.com/karengl" target="_blank">Karen Lee</a><br />
          <a href="https://github.com/vyao95" target="_blank">Vincent Yao</a><br />
          <a href="https://jcatajoy.myportfolio.com/" target="_blank">Janel Catajoy</a><br />

          </p>
          </div>
    );
  }
}

export default About;
