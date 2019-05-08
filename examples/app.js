import React from 'react'
import ReactDom from 'react-dom'
import LazyLoad from '../src/index'
import './index.css'
import BScroll from 'better-scroll'

class App extends React.Component {

  componentDidMount(){
    
    var self = this
    this.scroll = new BScroll(this.warp, {
      probeType : 2
    })
    this.scroll.on('scroll', function(){
      console.log(self.dom.getBoundingClientRect().top)
      // console.log(self.dom.offsetTop)
    })
  }

  render(){
    return (
      <div style={{width: 600,height: 600, margin: '20px auto', overflow: 'hidden'}} ref={el=>this.warp=el}>
        <div  style={{height: 3000, backgroundColor: 'red', position:'relative'}}>
          <div ref={el=>this.dom=el} style={{width: '100%', height: 200, backgroundColor: 'blue', position:'absolute', top:'800px'}}>

          </div>
        </div>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById("root"))