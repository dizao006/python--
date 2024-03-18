// 一个简单的例子
// 1将相同的参数固定
// function add(x) {
//     return function (y) {
//         return x + y
//     }
// }
// console.log(add(1)(2));
// //2 提前确认
// //对时间绑定进行判断
// var on = function (isSupport, element, ev ent, callback) { 
//     isSupport = isSupport || document.addEventListener
//     if (isSupport) {
//         return element.addEventListener(event, callback, false)
//     } else {
//         return element.attachEvent('on' + event, callback)
//     }
// }

//通用柯里化函数 (参数固定的情况下)
// function curry() {
//     let fn = arguments[0]; //拿到要执行的函数
//     let args = Array.prototype.slice.call(arguments, 1) //获取第一个参数以后的参数
//     //判断参数是否足够
//     if (args.length === fn.length) {
//         //第一次参数足够
//         return fn.apply(this.args)
//     }
//     // return '参数不够'
//     function _curry() {
//         args.push(...arguments)
//         if (args.length === fn.length) {
//             return fn.apply(this, args)
//         }
//         return _curry
//     }
//     return _curry
// }

// function add(a, b, c, d) {
//     return a + b + c + d
// }
// console.log(curry(add)(1)(2)(3)(4));
// console.log(curry(add, 1)(3, 4)(2));



//面试题
// console.log(add(1)(2)(3).toString());
// console.log(add(1, 2, 3)(4).toString());
// console.log(add(1)(2)(3)(4)(5).toString());


// function add() {
//     let arg = Array.prototype.slice.call(arguments);

//     function _addr() {
//         arg.push(...arguments) //将接收到的参数推入arg里面
//         return _addr
//     }
//     _addr.toString = function () {
//         //当调用此方法时，代表不需要接受参数了
//         return arg.reduce((a, b) => a + b)
//     }
//     return _addr
// }

//另外的写法
// function curry(fn) {
//     return function _curry(...args) {
//         if (args.length >= fn.length) {
//             return fn.apply(this, args)
//         } else {
//             return function (...args2) {
//                 return _curry.apply(this, args.concat(args2))
//             }
//         }
//     }
// }

// function add(x, y, z) {
//     return x + y + z
// }
// let s = curry(add)
// let restult = s(1)(2)(3)(5)
// console.log(restult)