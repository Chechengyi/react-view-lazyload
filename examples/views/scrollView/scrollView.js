import React from 'react'
import { LazyImage, LazyLoad, LazyProvider } from '../../../src/index'
import styles from './scrollView.css'

export default class ScrollView extends React.Component {

  componentDidMount(){
  }

  renderItem(){
    var arr = []
    for ( var i=0; i<100; i++ ) {
      arr.push(
        <div key={i} className={styles.itemWrap}>
          <LazyImage src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1303767483,2019555443&fm=27&gp=0.jpg' />
        </div>
      )
    }
    return arr
  }

  render(){
    return (
      <div>
        <LazyProvider type='scroll-view'>
          {this.renderItem()}
        </LazyProvider>
      </div>
    )
  }
}