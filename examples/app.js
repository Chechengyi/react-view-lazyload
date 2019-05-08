import React from 'react'
import ReactDom from 'react-dom'
import LazyLoad from '../src/index'
import './index.css'

class App extends React.Component {

  componentDidMount(){
    
  }

  render(){
    return (
      <div>
        <LazyLoad />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById("root"))