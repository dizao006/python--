function throttle(callback, time = 100) {
    let timer //不会立即执行
    return function () {
        if (timer) {
            return
        }
        let arg = arguments
        timer = setTimeout(() => {
            callback.apply(this, arg)
            timer = null
        }, time);
    } 
}
// //时间戳方式

// function throttle2(callback, time = 100) {
//     let t //会立即执行一次
//     return function () {
//         if (!t || Date.now() - t >= time) {
//             callback.apply(null, arguments)
//             t = Date.now()
//         }
//     }
// }

//最终版
// function throttle3(callback, time = 100, immediate) {
//     //整合版，允许自定义控制是否立即执行
//     if (immediate === undefined) {
//         immediate = true
//     }
//     if (immediate) {
//         let t;
//         return function () {
//             if (!t || Date.now() - t >= time) {
//                 callback.apply(null, arguments)
//                 t = Date.now()
//             }
//         }
//     } else {
//         let timer;
//         return function () {
//             if (timer) {
//                 return
//             }
//             let arg = arguments
//             timer = setTimeout(() => {
//                 callback.apply(this, arg)
//                 timer = null
//             }, time);
//         }
//     }

// }