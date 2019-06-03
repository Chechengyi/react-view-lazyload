import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
import style from './index.css'
import ScrollView from './views/scrollView/scrollView'
import BetterScrollView from './views/betterScrollView'

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className={style.leftMenu}>
          <ul>
            <li className={style.menuItem}><Link to='/scroll-view'>原生滚动</Link></li>
            <li className={style.menuItem}><Link to='/better-scroll-view'>better-scroll滚动</Link></li>
          </ul>
        </div>
        <div className={style.content}>
          <Switch>
            <Redirect exact from='/' to='/scroll-view' />
            <Route path='/scroll-view' component={ScrollView} />
            <Route path='/better-scroll-view' component={BetterScrollView} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDom.render(<App />, document.getElementById("root"))

// class App extends React.Component {

//   componentDidMount() {

//     // var self = this
//     // this.scroll = new BScroll(this.warp, {
//     //   probeType: 2
//     // })
//     // this.scroll.on('scroll', function () {
//     // })
//   }

//   render(){
//     return (
//       <div>
//         <div style={{
//           width: 800,
//           margin: '20px auto 0',
//           backgroundColor: 'red',
//           height: 3000,
//           position: 'relative'
//         }}>
//           <LazyProvider type='one'>
//             <div style={{ position: 'absolute', top: 900}}>
//               {/* <LazyLoad>
//                 <img style={{width: 100}} src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4190510919,1488771121&fm=27&gp=0.jpg'></img>
//               </LazyLoad>
//               <LazyLoad>
//                 <img style={{width: 100}} src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4190510919,1488771121&fm=27&gp=0.jpg'></img>
//               </LazyLoad>
//               <LazyLoad>
//                 <img style={{width: 100}} src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4190510919,1488771121&fm=27&gp=0.jpg'></img>
//               </LazyLoad> */}
//               <LazyImage style={{width: 100, height: 150, backgroundColor: 'blue'}} src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4190510919,1488771121&fm=27&gp=0.jpg' />
//             </div>
//           </LazyProvider>
//         </div>
//       </div>
//     )
//   }

//   // render() {
//   //   return (
//   //     <div style={{ width: 600, height: 600, margin: '20px auto', overflow: 'hidden' }} ref={el => this.warp = el}>
//   //       <LazyProvider type='ssy'>
//   //         <div style={{ height: 3000, backgroundColor: 'red', position: 'relative' }}>
//   //           <div ref={el=>this.dom=el}>
//   //             <LazyLoad />
//   //           </div>
//   //           <div>
//   //             <LazyLoad />
//   //           </div>
//   //         </div>
//   //       </LazyProvider>
//   //       {/* <LazyProvider type='cheche'>
//   //         <div>
//   //           <LazyLoad />
//   //         </div>
//   //         <div>
//   //           <LazyLoad />
//   //         </div>
//   //       </LazyProvider> */}
//   //     </div>
//   //   )
//   // }
// }
