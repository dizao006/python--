// const debounce = (fn, time = 1000) => {
//   let timer
//   return (...arges) => {
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//       fn(...arges)
//     }, time)
//   }
// }

function devounce2(fn, time = 1000) {
  let timer
  return function (...arges) {
    clearInterval(timer)
    timer = setTimeout(() => {
      fn.apply(this, arges)
    }, time)
  }
}

// function s() {
//   console.log('s')
// }
// const s2 = devounce2(s, 500)
// s2()