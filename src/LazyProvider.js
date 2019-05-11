import React from 'react'
import { LazyContext } from './context'
import throttle from './utils/throttle'
import { triggerType } from './observer'
import PropTypes from 'prop-types'

export default class LazyProvider extends React.Component {

  static defaultProps  = {
    mode: 'vertical'  // inline 水平
  }

  constructor(props){
    super(props)
    this.handleListen = throttle(this.handleListen.bind(this), 300)
  }

  componentDidMount(){
    document.addEventListener('scroll', this.handleListen)
    window.addEventListener('resize', this.handleListen)
  }

  componentWillUnmount(){
    document.removeEventListener('scroll', this.handleListen)
    window.removeEventListener('resize', this.handleListen)
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
  mode: PropTypes.string
}