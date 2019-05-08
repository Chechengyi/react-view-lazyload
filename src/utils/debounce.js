/**
  * 
  * @param {Function} func 执行的函数
  * @param {Number} wait 等待的时间
  * @param {Boolean} immediate 是否立即执行一次
  */
export default function debounce(func, wait, immediate) {
  let timer
  return function debouced(...args) {
    timer && clearTimeout(timer)
    let result

    if (immediate) {
      let callNow = !timer
      timer = setTimeout(function () {
        timer = null
      }, wait)
      callNow && (result = func(...args))
    } else {
      timer = setTimeout(function () {
        result = func(...args)
      }, wait)
    }
    return result
  }
}