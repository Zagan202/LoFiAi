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
        <body>
        <div class="accordion">
            <ul>
                <li>
                    <input type="radio" name="select" class="accordion-select" checked />
                    <div class="accordion-title">
                        <span>What is Deep Learning?</span>
                    </div>
                    <div class="accordion-content">
                    <p align="left">Deep Learning is a segment of artificial intelligence that attempts to
                    replicate that way that humans learn and gain knowledge. This is done by
                    sophisticated automation techniques known as predictive analysis. Predictive
                    analysis uses new and past information to assign values to the likelihood of
                    future events.
                    </p>

                    <p align="left">Audio-centric Deep Learning is commonly used for voice commands given to AI
                    assistants such as Apple’s SIRI and Amazon’s Alexa. These devices use software
                    that analyzes and recognizes keywords or key parts of words. With that info it
                    can make near perfect decisions on what command will proceed the phrase and
                    execute a command accordingly. Much like how humans, from experience, can
                    assume or predict certain outcomes or phrases of speech from their own
                    experiences.
                    </p>

                    <p align="left">What’s important about Deep Learning is its ability to adapt given new
                    information without hard coding a specific rule set for every situation.
                    This allows for a lot more flexibility and growth for applications that
                    utilize this technology which is right at home with LoFiAi.
                    </p>
                    <img src="https://wybeaconnews.org/wp-content/uploads/2017/05/LoFi-475x267.jpg" height="80" width="150"/>
                    </div>
                    <div class="accordion-separator"></div>
                </li>
                <li>
                    <input type="radio" name="select" class="accordion-select" />
                    <div class="accordion-title">
                        <span>Title2</span>
                    </div>
                    <div class="accordion-content">
                        Content
                    </div>
                    <div class="accordion-separator"></div>
                </li>
                <li>
                    <input type="radio" name="select" class="accordion-select" />
                    <div class="accordion-title">
                        <span>Title</span>
                    </div>
                    <div class="accordion-content">
                        Content
                    </div>
                    <div class="accordion-separator"></div>
                </li>
                <li>
                    <input type="radio" name="select" class="accordion-select" />
                    <div class="accordion-title">
                        <span>Title</span>
                    </div>
                    <div class="accordion-content">
                        Content
                    </div>
                    <div class="accordion-separator"></div>
                </li>
                <li>
                    <input type="radio" name="select" class="accordion-select" />
                    <div class="accordion-title">
                        <span>Title</span>
                    </div>
                    <div class="accordion-content">
                        Content
                    </div>
                    <div class="accordion-separator"></div>
                </li>
                <li>
                    <input type="radio" name="select" class="accordion-select" />
                    <div class="accordion-title">
                        <span>Title</span>
                    </div>
                    <div class="accordion-content">
                        Content
                    </div>
                    <div class="accordion-separator"></div>
                </li>
                <li>
                    <input type="radio" name="select" class="accordion-select" />
                    <div class="accordion-title">
                        <span>Title</span>
                    </div>
                    <div class="accordion-content">
                        Content
                    </div>
                    <div class="accordion-separator"></div>
                </li>
                <li>
                    <input type="radio" name="select" class="accordion-select" />
                    <div class="accordion-title">
                        <span>Title</span>
                    </div>
                    <div class="accordion-content">
                        Content
                    </div>
                    <div class="accordion-separator"></div>
                </li>
                <li>
                    <input type="radio" name="select" class="accordion-select" />
                    <div class="accordion-title">
                        <span>Title</span>
                    </div>
                    <div class="accordion-content">
                        Content
                    </div>
                    <div class="accordion-separator"></div>
                </li>
            </ul>
        </div>
        </body>
    );
  }
}

export default Learn;
