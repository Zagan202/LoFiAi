import React, { Component } from 'react';
import './styles.css';

class Learn extends Component {

  render(){
    return(
      <div className="accordion">
        <ul>
          <li>
            <input type="radio" name="select"
              className="accordion-select"
            />
            <div className="accordion-title">
              <span>
                What is Deep Learning?
              </span>
            </div>
            <div className="accordion-content" >
              <p align="left">
                Deep Learning is a segment of artificial intelligence that attempts to
                replicate the way that humans learn and gain knowledge. This is done through
                sophisticated automation techniques known as predictive analysis. Predictive
                analysis uses new and past information to assign values to the likelihood of
                future events.
                <br/>
                <br/>
                Audio-centric Deep Learning is commonly used for voice commands given to AI
                assistants such as Apple’s SIRI and Amazon’s Alexa. These devices use software
                that analyzes and recognizes keywords or key parts of words. With that info it
                can make near perfect decisions on what command will proceed the phrase and
                execute a command accordingly. Much like how humans, from experience, can
                assume or predict certain outcomes or phrases of speech from their own
                experiences.
                <br/>
                <br/>
                What’s important about Deep Learning is its ability to adapt given new
                information without hard coding a specific rule set for every situation.
                This allows for a lot more flexibility and growth for applications that
                utilize this technology which is right at home with LoFiAi.
              </p>
            </div>
            <div className="accordion-separator"></div>
          </li>
          <li>
            <input type="radio" name="select" className="accordion-select"/>
            <div className="accordion-title">
              <span>
                What are Neural Networks?
              </span>
            </div>
            <div className="accordion-content">
              <p align="left">
                Neural Networks are one of a variety of deep learning techniques used today.
                The main focus of Neural Networks is pattern recognition,
                including handwriting recognition, facial recognition,
                and —related to this project— speech-to-text transcription.
                This can be done through either supervised or unsupervised learning.
                <br/>
                <br/>
                Unsupervised learning occurs when the algorithm attempts to cluster the data given
                into subsets made up of similar objects or data without
                being given a target to focus on.
                Rather, it tries to make those decisions completely on its own.
                We use supervised learning however, where the target is well defined
                but the algorithm makes decisions with its dataset to reach it.
                <br/>
                <br/>
                Therefore, the neural network is trained with data telling it what to output.
                Having a target to reach for guides the neural network to make decisions,
                which are then used as new input as the process repeats.
                This type of logic described is often referred to as
                Bayesian logic: decision making and inferential statistics
                with probability inference that uses knowledge of prior events
                to predict future events.
                <br/>
                <br/>
                 This architecture is known for the numerous layers of processing
                 between the initial input and desired output.
                 Each layer contains several nodes,
                 each of which have a correlating weight
                 that defines their importance to other nodes in the network.
                 With backpropagation, a technique to calculate errors while learning,
                 the values can also adjust and learn from their predictive mistakes.
                 This provides better accuracy.
              </p>
            </div>
              <div className="accordion-separator"></div>
          </li>
          <li>
            <input type="radio" name="select" className="accordion-select"/>
            <div className="accordion-title">
              <span>
                What is WaveNet and why do we use it?
              </span>
            </div>
            <div className="accordion-content">
              <p align="left">
                <a href="https://deepmind.com/blog/wavenet-generative-model-raw-audio/"
                  target="_blank" rel="noopener noreferrer">
                  WaveNet
                </a>
                &nbsp; is a deep neural network architecture that generates raw audio.
                The network uses a dataset of audio waveforms (.wav files)
                and outputs its interpretation of the dataset one sample at a time.
                A common application of this technology is text-to-speech(TTS)
                such that it recreates the sounds associated with words written
                using complex mathematical models.
                However, WaveNet is different than most TTS technology,
                as it may potentially create more natural sounding generated voices
                due to its ability to learn from raw audio.
                <br/>
                We used WaveNet because of this ability,
                which opens the door for many forms of audio beyond just speech,
                most notably music, which is the focus of LoFiAi.
                <br/>
                The repository for the tensorflow wavenet implementation we used can
                be found here:&nbsp;
                <a href="https://github.com/ibab/tensorflow-wavenet"
                  target="_blank" rel="noopener noreferrer">
                  https://github.com/ibab/tensorflow-wavenet
                </a>
              </p>
            </div>
            <div className="accordion-separator"/>
          </li>
          <li>
            <input type="radio" name="select" className="accordion-select"/>
            <div className="accordion-title">
              <span>
                What are other alternatives to ML with music?
              </span>
            </div>
            <div className="accordion-content">
              <p align="left">
                With increases in processing power come increases in machine learning
                applications. As stated earlier there are many common applications for
                machine learning that we use both actively and passively everyday.
                One of the more niche applications of AI and Machine Learning
                is music composition. Part of our inspiration for LoFiAi as developers
                is this uncommoness; it's a mostly untapped area of the field
                that piqued our interest to dive into and discover for ourselves.
                However, we are not the first to delve into the subject,
                nor will we be the last.
                Here are a few other organizations that are making strides
                in the same field:
                <br/>
                <br/>
                <a href="https://magenta.tensorflow.org"
                  target="_blank" rel="noopener noreferrer">
                  Google’s Magenta
                </a>
                &nbsp; takes in midi files as input data to learn from
                and generate new music in midi form.
                There's a ton of pre-trained models for different genres,
                and there's a ton of great documentation with the API
                as well as an active community.
                <br/>
                <br/>
                <a href="https://www.jukedeck.com/?no-redirect=true"
                  target="_blank" rel="noopener noreferrer">
                  JukeDeck
                </a>
                 &nbsp; is a closed source service that generates tracks of all genres
                using deep learning neural networks.
                The output is extremely naturalistic,
                with their goal being the creation of royalty free music
                custom generated for user needs.
                <br/>
                <br/>
                <a href="http://www.flow-machines.com"
                  target="_blank" rel="noopener noreferrer">
                  Flow Machines
                </a>
                &nbsp; is a Sony Computer Science Laboratories
                sponsored research effort to generate pop songs.
                The API is not open to the public.
                However, the songs it’s generated are.
                The technology used is based off of Markov models,
                which are commonly used to model statistical properties
                of temporal sequences.
                <br/>
                <br/>
                If you would like to learn about strategies for AI music composition
                outside of those listed above, below are a few links
                to pique your interest:&nbsp;
                <a href="http://www.asimovinstitute.org/analyzing-deep-learning-tools-music/"
                  target="_blank" rel="noopener noreferrer">
                  Analyzing Deep Learning Music Tools
                </a>
                <a href="https://medium.com/artists-and-machine-intelligence/
                         neural-nets-for-generating-music-f46dffac21c0"
                  target="_blank" rel="noopener noreferrer">
                  , Neural Networks and Music
                </a>
                <a href="http://dadabots.com" target="_blank" rel="noopener noreferrer">
                  , Dadabots
                </a>
              </p>
            </div>
            <div className="accordion-separator"/>
          </li>
          <li>
            <input type="radio" name="select" className="accordion-select" />
            <div className="accordion-title">
              <span>What do the different parameters mean?</span>
            </div>
            <div className="accordion-content">
              <p align="left">
                Sample Size: The Wavenet algorithm divides its sample data into a
                series of smaller chunks, in order to process one set of data thoroughly
                and repeatedly. This parameter refers to the size of
                each of these chunks, in number of samples. Larger sample sizes allow
                for recognition of more long-term patterns in the audio provided.
                However, this is also by far the largest factor in
                determining the speed at which training takes place,
                as each step of training analyzes this number of samples.
                <br/>
                <br/>
                Sample Rate: This is a term used in audio outside of AI generation,
                referring to the number of “samples” per second in a given audio file.
                Samples can be thought of as the smallest unit of data referring
                to a soundwave. 44100 (44.1kHz) has been the standard for years,
                however, LoFiAi uses a more “Lo-Fi” sample rate of 16000,
                to allow for much faster AI training.
                <br/>
                <br/>
                Learning Rate: AI learn or “train” through a series of baby steps
                toward one target set of values. This process is “Gradient Descent”
                and is the basis of modern “Data Science”.
                “Learning Rate” essentially refers to the size of each of these steps.
                Larger steps can lead to faster learning,
                but run the risk of missing the finer details of the given data set,
                so most sources recommend starting broad, and slowly decreasing this
                value as the model approaches its goal.
              </p>
            </div>
            <div className="accordion-separator"/>
          </li>
          <li>
            <input type="radio" name="select" className="accordion-select" />
            <div className="accordion-title">
              <span>
                What platform is training done on?
              </span>
            </div>
            <div className="accordion-content">
              <p align="left">
                Formerly AWS EC2, now Google Cloud’s Cloud Compute Engine.
                Training even with a small data set and sample size can take days
                on end of training before becoming listenable, and requires
                a lot of memory. As such, this process requires a strong computer
                that can run one process uninterrupted, ideally for a low hourly rate.
                We’ve found that Google meets these needs best and with
                the most ease out of the services we looked into.
                They also provide $300 of free credit to new users,
                so we highly recommend anyone interested in AI generated music give
                their services a look.
              </p>
            </div>
            <div className="accordion-separator"/>
          </li>
          <li>
            <input type="radio" name="select" className="accordion-select"/>
            <div className="accordion-title">
              <span>
                Pitfalls discovered while training
              </span>
            </div>
            <div className="accordion-content">
              <p align="left">
                Overly large test data sets can lead to confusion on the part of the AI.
                Initially we thought to train with a set of 88 songs from different
                artists, all within the same genre, however, trying to find consistent
                patterns across such a varied pool of data lead to our AI recognizing
                only the most simple dynamic patterns, with no adherence to tone.
                We’ve found that training works most efficiently with a
                limited set of music, featuring similar instrumentation and tempo.
              </p>
            </div>
            <div className="accordion-separator"/>
          </li>
          <li>
            <input type="radio" name="select" className="accordion-select" />
            <div className="accordion-title">
              <span>What is this page for?</span>
            </div>
            <div className="accordion-content">
              <p align="left">
                Learning with LoFi is our attempt as AI developers to explain the
                basics of the process.
                <br />
                There's very little in the way of approachable
                resources for learning about this material,
                <br/>
                so our goal is to get all
                kinds of people excited about the possibilities of AI in music,
                <br/>
                and empower them to experiment themselves, without being intimidated
                by the scientific specifics.
                <br/>
                Our project is open source, so if you would like to contribute
                or start training your own music click&nbsp;
                <a href="https://github.com/Zagan202/LoFiAi"
                  target="_blank" rel="noopener noreferrer">
                  here
                </a>
                &nbsp;to find out more.
                <br/>
                <br/>
                <img src="https://wybeaconnews.org/wp-content/uploads/2017/05/LoFi-475x267.jpg"
                  alt=""/>
              </p>
            </div>
            <div className="accordion-separator"/>
          </li>
        </ul>
      </div>
    );
  }
}

export default Learn;
