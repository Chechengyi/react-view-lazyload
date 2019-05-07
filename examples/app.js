import React from 'react'
import ReactDom from 'react-dom'
import Test1 from '../lib/index'

class App extends React.Component {

  componentDidMount(){
    console.log(Test1)
  }

  render(){
    return (
      <div>react dom </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById("root"))