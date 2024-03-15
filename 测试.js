// function Human(name) {
//     this.name = name
//     this.kingdom = 'animal'
//     this.color = ['yellow', 'white', 'brown', 'black']
// }

// function Chinese(name, age) {
//     Human.call(this, name)
//     this.age = age
//     this.color = 'yellow'
// }
// Human.prototype.getName = function () {
//     return this.name
// }
// Chinese.prototype = Object.create(Human.prototype)
// Chinese.prototype.getAge = function () {
//     return this.age
// }
// const _isFibonacci = array => {
//     let isTru = []
//     // 补全代码
//     if (array.length < 3) {
//         return false
//     }
//     if (array[0] == 0 && array[1] == 1) {
//         for (let i = 2; i < array.length; i++) {
//             if (array[i] != (array[i - 1] + array[i - 2])) {
//                 isTru.push(false)
//             } else {
//                 isTru.push(true)
//             }
//         }
//     }
//     if (isTru.includes(false)) {
//         return false
//     } else {
//         return true
//     }
// }



// let s = _isFibonacci([0, 1, 1, 2, 3, 5, 8])
// console.log(s)
let ar = [1, [2, 3, [4, 5]]]
// let s = ar.flat().flat()
// let reult = Object.values(s)
// console.log(Array.isArray(reult))
// let s=ar.toString()
// let ss=s.replace(/,/g,'')
// let result=[]
// for (let i=0; i<ss.length; i++) {
//      result.push(+ss[i])
// }

// console.log(result)
// Number.prototype._isPrime = function (val) {
//      let vals = this.valueOf()
//      let count = []
//      for (let i = 1; i <= vals;i++) {
//           if (vals % i == 0) {
//                count.push(true)
//           }
//      }
//      console.log(count)
//      if (count.length > 2) {
//           return false
//      } else {
//           return true
//      }

// }
// // Number.prototype._isPrime(5)

// function s() {
//      return (2)._isPrime() ===true
// }
// console.log(s()) 
// let reg=/[0-9]{17}[X|d]?/
// let s='21062319980907888X'
// console.log(reg.test(s)) 

// const _symbolKey = array => {
//      // 补全代码
//      let res = {a:1,b:2};
//      array.forEach(item => {
//          res[Symbol(item)] = item;
//      })
//      return res;
//  }
//  console.log(_symbolKey([1,2]))

// function _isSameSet(s1, s2) {
//      console.log(s1, s2)
//      let ar1 = Array.from(s1)
//      let ar2 = Array.from(s1)
//      let len = ar1.length > ar2.length ? ar1.length : ar2.length
//      for (let i = 0; i < len; i++) {
//           if (ar1[i] !== ar2[i]) {
//                return false
//           }
//      }
//      return true
// }

// function s() {
//      const set1 = new Set(['a', 'b', 'c']);
//      const set2 = new Set(['a', 'c', 'b']);
//      var result = _isSameSet(set1, set2);
//      return result;
// }
// console.log(s())

// let count = 0
// const _proxy = object => {
//      // 补全代码
//      let proxy = new Proxy(object, {
//           get(target, key) {
//                if (target[key] == undefined) {
//                     count--
//                } else {
//                     let v = target[key]
//                     count += 1
//                     return v
//                }

//           },
//           set(target, key, val) {
//                if (target[key] = !val) {
//                     target[key] = val
//                     count++
//                }
//           }
//      })
//      return proxy
// }

// function s() {
//      var me = {
//           name: 'me'
//      };
//      var proxy = _proxy(me);
//      proxy.qwe;
//      proxy.qwe;
//      proxy.qwe;
//      return count === -3
// }
// console.log(s())

// const _proxy = (object, ...prototypes) => {
//      // 补全代码
//      console.log(object, ...prototypes)
//      let arr = [...prototypes]
//      if (arr.length > 1) {
//           arr.shift()
//      }
//      let proxy = new Proxy(object, {
//           get(target, key) {
//                if (arr.includes(key)) {
//                     return 'noright'
//                } else {
//                     return target[key];
//                }

//           },
//           set(target, key, val) {
//                if (target[key] !== val) {
//                     target[key] = val
//                     console.log('改变了')
//                }
//           }

//      })
//      return proxy
// }


// function s() {
//      let me = _proxy({
//           name: 'me',
//           age: 1,
//           from: 'china'
//      }, 'age');
//      // console.log(me.name,me.age)
//      return me.name === 'me' && me.age === 'noright'
// }
// console.log(s())

// let s = {
//     name: 'se'
// }
// let s = ['1']
// console.log(s.valueOf()) 
// console.log(s.toString());
// console.log(Number(s)) 
// console.log(5 + s);
// let x = 1
// let y = x++ + ++x + x++ * ++x + ++x
// console.log(y) 

// var a = {
//     i: 1,
//     toString: function () {
//         return a.i++
//     }
// }
// console.log(a == 1 && a == 2 && a == 3)

// let x = 10

// function s() {
//     console.log(x)
// }
// (() => {
//     let x = 20
//     s() //作用域是静态的，一旦被创建，就顶死了，比如这个，它再外层创建，读取的应该是外层的x，而不是被执行时候的作用域的值
// })()

// function s() {
//     console.log(this) //指向全局  严格模式undefined
// }
// s()

// var s1 = {
//     text: 's1',
//     fn() {
//         return this.text
//     }
// }
// var s2 = {
//     text: 's2',
//     fn() {
//         var c1 = s1.fn
//         return c1()
//     }
// }
// console.log(s2.fn())
function eat() {
    let food = 'jis'
    return function () {
        console.log(food)
        return food
    }
}
let s = eat() //手动闭包 
let ss = s()
console.log(ss);