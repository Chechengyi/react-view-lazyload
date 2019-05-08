import React from 'react'
import { LazyContext } from './context'

export default class LazyLoad extends React.Component {

  componentDidMount() {
    console.log(this.el)
  }

  checkView(){

  }

  render() {
    return (
      <LazyContext.Consumer>
        {type => {
          this.type = type
          return (
            <div ref={el=>this.el = el}>hello world</div>
          )
        } }
      </LazyContext.Consumer>
    )
  }
}