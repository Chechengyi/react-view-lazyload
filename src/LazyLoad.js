import React from 'react'
import { LazyContext } from './context'
import { addMap } from './observer'
import ReactDom from 'react-dom'

export default class LazyLoad extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      visible:false
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
          visible: true
        })
        return true
      }
    } else {
      if ( (rect.left >0 && rect.left <= windowW) ) {
        this.setState({
          visible: true
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
          // return 
          // this.state.visible? 
          // this.props.children : <div>占位中</div>
          if (this.state.visible) {
            return this.props.children
          } else {
            return <div>占位中...</div>
          }
        }}
      </LazyContext.Consumer>
    )
  }
}