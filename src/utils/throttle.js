export default function throttle(func, wait){
  let timer, previous = 0
  return function throttled(...args){
    let now = +new Date()
    let remaining  = wait - ( now-previous )
    if ( remaining <=0 || remaining > wait ) {
      if ( timer ) {
        clearTimeout(timer)
        timer = null
      }
      previous = now
      func(...args)
    } else if (!timer) {
      timer = setTimeout( function(){
        previous = +new Date()
        timer = null
        func(...args)
      }, remaining)
    }
  }
}