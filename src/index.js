// import React from 'react'
// import debounce from './utils/debounce'
// import throttle from './utils/throttle'
// import PropTypes from 'prop-types'

// export default class LazyLoad extends React.Component {

//   static defaultProps = {
//     offset: 100
//   }

//   constructor(props){
//     super(props)
//     this.state = {
//       num: 0,
//       ready: false
//     }
//     // this.handleMove = throttle(this.handleMove.bind(this), 300)
//   } 
//   render(){
//     return (
//       <div>
//           ddd
//       </div>
//     )
//   }
// }

// LazyLoad.propTypes = {
//   offset: PropTypes.number
// }

// export const lazyload = ()=> {
  
// }

import LazyProvider from './LazyProvider'
import LazyLoad from './LazyLoad'

export {
  LazyProvider,
  LazyLoad
}