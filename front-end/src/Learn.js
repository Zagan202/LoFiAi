import React, { Component } from 'react';
import './styles.css';

class Learn extends Component {
  constructor(props){
  super(props);
  }

  render(){
    return(
      <div className="accordion">
        <ul>
          <li>
            <input type="radio" name="select" 
              className="accordion-select" 
            />
            <div className="accordion-title">
              <span>What is Deep Learning?</span>
            </div>
            <div className="accordion-content">
              <p align="left">
                Deep Learning is a segment of artificial intelligence that attempts to
                replicate the way that humans learn and gain knowledge. This is done through
                sophisticated automation techniques known as predictive analysis. Predictive
                analysis uses new and past information to assign values to the likelihood of
                future events.
              </p>
              <p align="left">
                Audio-centric Deep Learning is commonly used for voice commands given to AI
                assistants such as Apple’s SIRI and Amazon’s Alexa. These devices use software
                that analyzes and recognizes keywords or key parts of words. With that info it
                can make near perfect decisions on what command will proceed the phrase and
                execute a command accordingly. Much like how humans, from experience, can
                assume or predict certain outcomes or phrases of speech from their own
                experiences.
              </p>
              <p align="left">
                What’s important about Deep Learning is its ability to adapt given new
                information without hard coding a specific rule set for every situation.
                This allows for a lot more flexibility and growth for applications that
                utilize this technology which is right at home with LoFiAi.
              </p>
              <img alt="" src="https://wybeaconnews.org/wp-content/uploads/2017/05/LoFi-475x267.jpg" height="80" width="150"/>
            </div>
            <div className="accordion-separator"></div>
          </li>
          <li>
            <input type="radio" name="select" className="accordion-select" />
            <div className="accordion-title">
              <span>What are Neural Networks?</span>
            </div>
            <div className="accordion-content">
              <p align="left">
                Neural Networks are one of a variety of deep learning techniques used today.
                The main focus of Neural Networks is pattern recognition,
                including handwriting recognition, facial recognition, 
                and —related to this project— speech-to-text transcription. 
                This can be done through either supervised or unsupervised learning.
              </p>
              <p align="left">
                Unsupervised learning occurs when the algorithm attempts to cluster the data given 
                into subsets made up of similar objects or data without being given a target to focus on.
                Rather, it tries to make those decisions completely on its own.
                We use supervised learning however, where the target is well defined 
                but the algorithm makes decisions with its dataset to reach it. 
              </p>
              <p align="left">
                Therefore, the neural network is trained with data telling it what to output.
                Having a target to reach for guides the neural network to make decisions,
                which are then used as new input as the process repeats. 
                This type of logic described is often referred to as 
                Bayesian logic: decision making and inferential statistics with probability inference
                that uses knowledge of prior events to predict future events.
              </p>
              <p align="left">
                 This architecture is known for the numerous layers of processing between the initial input and desired output.
                 Each layer contains several nodes, each of which have a correlating weight that defines their importance to other nodes in the network.
                 With backpropagation, a technique to calculate errors while learning, the values can also adjust and learn from their predictive mistakes.
                 This provides better accuracy.
              </p>
            </div>
              <div className="accordion-separator"></div>
          </li>
          <li>
            <input type="radio" name="select" className="accordion-select" />
            <div className="accordion-title">
              <span>Title</span>
            </div>
            <div className="accordion-content">
              Content
            </div>
            <div className="accordion-separator"></div>
          </li>
          <li>
            <input type="radio" name="select" className="accordion-select" />
            <div className="accordion-title">
              <span>Title</span>
            </div>
            <div className="accordion-content">
              Content
            </div>
            <div className="accordion-separator"></div>
          </li>
          <li>
            <input type="radio" name="select" className="accordion-select" />
            <div className="accordion-title">
              <span>Title</span>
            </div>
            <div className="accordion-content">
              Content
            </div>
            <div className="accordion-separator"></div>
          </li>
          <li>
            <input type="radio" name="select" className="accordion-select" />
            <div className="accordion-title">
              <span>Title</span>
            </div>
            <div className="accordion-content">
              Content
            </div>
            <div className="accordion-separator"></div>
          </li>
          <li>
            <input type="radio" name="select" className="accordion-select" />
            <div className="accordion-title">
              <span>Title</span>
            </div>
            <div className="accordion-content">
              Content
            </div>
            <div className="accordion-separator"></div>
          </li>
          <li>
            <input type="radio" name="select" className="accordion-select" />
            <div className="accordion-title">
              <span>Title</span>
            </div>
            <div className="accordion-content">
              Content
            </div>
            <div className="accordion-separator"></div>
          </li>
          <li>
            <input type="radio" name="select" className="accordion-select" />
            <div className="accordion-title">
              <span>Title</span>
            </div>
            <div className="accordion-content">
              Content
            </div>
            <div className="accordion-separator"></div>
          </li>
        </ul>
      </div>
  );
  }
}

export default Learn;
