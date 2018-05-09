
import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring'
import './styles.css'
import logo from './assets/logo.png';
import Song from './Song'

const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <React.Fragment>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    <ParallaxLayer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>

    <ParallaxLayer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p>{first}</p>
        <p>{second}</p>
      </span>
    </ParallaxLayer>
  </React.Fragment>
)

export default class extends React.Component {
  scroll = to => this.parallax.scrollTo(to)
  render() {
    return (
      <div
        style={{
          gridColumn: 'span 2',
          gridRow: 'span 3',
          background: '#dfdfdf',
        }}>
        <Parallax
          className="container"
          ref={node => (this.parallax = node)}
          pages={3}
          horizontal
          scrolling={true}>
          <Page
            offset={0}
            gradient="pink"
            caption="Welcome to"
            first="LoFiAi"
            //second="dolor sit"
            onClick={() => this.scroll(1)}
          />
          <Page
            offset={1}
            gradient="teal"
            caption="what we do"
            first="AI Driven Music Composition"
            second="W/ TensorFlow ver. of Google WaveNet"
            onClick={() => this.scroll(2)}
          />
          <Page
            offset={2}
            gradient="tomato"
            caption="TL;DR:"
            first="Using AI trained on Google's computers"
            second="to compose new music."
            onClick={() => this.scroll(0)}
          />
        </Parallax>
      </div>
    )
  }
}
/*
class App extends Component {
  render() {
    return (
      <div className = "mid">
        <Song url="http://localhost:4200/get/song" pollInterval={2000} />
      </div>
    );
  }
}
/*
export default App;
*/
