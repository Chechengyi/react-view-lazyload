import React from 'react'
import { LazyContext } from './context'

export default class LazyProvider extends React.Component {
  render(){
    return (
      <LazyContext.Provider value={this.props.type}>
        {this.props.children}
      </LazyContext.Provider>
    )
  }
}