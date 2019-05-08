import React from 'react'
import ReactDom from 'react-dom'
// import LazyLoad from '../src/index'
import { LazyLoad, LazyProvider } from '../src/index'
import './index.css'
import BScroll from 'better-scroll'

class App extends React.Component {

  componentDidMount() {

    var self = this
    this.scroll = new BScroll(this.warp, {
      probeType: 2
    })
    this.scroll.on('scroll', function () {
    })
  }

  render() {
    return (
      <div style={{ width: 600, height: 600, margin: '20px auto', overflow: 'hidden' }} ref={el => this.warp = el}>
        <LazyProvider type='ssy'>
          <div style={{ height: 3000, backgroundColor: 'red', position: 'relative' }}>
            <div ref={el=>this.dom=el}>
              <LazyLoad />
            </div>
            <div>
              <LazyLoad />
            </div>
          </div>
        </LazyProvider>
        {/* <LazyProvider type='cheche'>
          <div>
            <LazyLoad />
          </div>
          <div>
            <LazyLoad />
          </div>
        </LazyProvider> */}
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById("root"))