import React from 'react'
import PropTypes from 'prop-types'
import ReactDom from 'react-dom'
import { LazyContext } from './context'
import { addMap } from './observer'


export default class LazyImage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      src: this.props.loadImg
    }
  }

  componentDidMount() {
    addMap(this.type, this)
    this.el = ReactDom.findDOMNode(this)
  }

  checkView = ()=>{
    var windowH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight // 浏览器高度兼容写法
    var windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    const rect = this.el.getBoundingClientRect()
    // console.log('浏览器视口的高度', windowH)
    // console.log('元素距离顶部的距离',rect.top)
    if ( this.mode === 'vertical' ) {
      if ( (rect.top >0 && rect.top <= windowH) ) {
        this.setState({
          src: this.props.src
        })
        return true
      }
    } else {
      if ( (rect.left >0 && rect.left <= windowW) ) {
        this.setState({
          src: this.props.src
        })
        return true
      }
    }
    return false
  }

  render() {
    return (
      <LazyContext.Consumer>
        {contextInfo => {
          this.type = contextInfo.type
          this.mode = contextInfo.mode
          return <img style={this.props.style} src={this.state.src} />
        }}
      </LazyContext.Consumer>
    )
  }
}

LazyImage.propTypes = {
  src: PropTypes.string
}