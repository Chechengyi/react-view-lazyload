import React from 'react'
import { LazyContext } from './context'
import throttle from './utils/throttle'
import { triggerType } from './observer'
import PropTypes from 'prop-types'

const default_events = ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove']

export default class LazyProvider extends React.Component {

  static defaultProps  = {
    mode: 'vertical',  // inline 水平
  }
  
  constructor(props){
    super(props)
    this.state = {
      events: this.props.events ||default_events
    }
    this.handleListen = throttle(this.handleListen.bind(this), 300)
    this.bindEventListener = this.bindEventListener.bind(this)
    this.removeEventListener = this.removeEventListener.bind(this)
  }

  componentDidMount(){
    this.bindEventListener()
  }

  bindEventListener(){
    this.state.events.forEach( event => {
      document.addEventListener(event, this.handleListen)
    });
  }

  removeEventListener(){
    this.state.events.forEach( event => {
      document.removeEventListener(event, this.handleListen)
    })
  }

  componentWillUnmount(){
    this.removeEventListener()
  }

  handleListen(){
    triggerType(this.props.type)
  }

  render(){
    return (
      <LazyContext.Provider value={{
        type: this.props.type,
        mode: this.props.mode
      }}>
        {this.props.children}
      </LazyContext.Provider>
    )
  }
}


LazyProvider.propTypes = {
  type: PropTypes.string,
  events: PropTypes.array
}