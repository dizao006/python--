// let arr = [1, 1, 3, 6, 1, 3, 2, 1, 3, 2, 6, 8, 9, 8, 8]
// let obj = {}

// arr.forEach(e => {
//     if (obj[e]) {
//         obj[e].push(e)
//     } else {
//         obj[e] = [e]
//     }
// });
// for (const key in obj) {
//     console.log(key, obj[key].length)
// }

let str = 'aaabbbccccdddddd'
let obj = {}
let arr = str.split('')
arr.forEach(e => {
    if (obj[e]) {
        obj[e].push(e)
    } else {
        obj[e] = [e]
    }
});
let max = {
    key: []
}
for (const key in obj) {
    if (obj[key].length > max['key'].length) {
        max = {
            key: [key, obj[key].length]
        }
    }
}
console.log(max)


//一道面试题
//封装一个能统计重复字符的函数，例如aaabbbcccdddd转化为3a3b3c4d


// let str = 'aaabbbcccdddd'

// function torem(str) {
//     let obj = {}
//     let result = ''
//     let arr = str.split('')
//     arr.forEach(e => {
//         if (obj[e]) {
//             obj[e].push(e)
//         } else {
//             obj[e] = [e]
//         }
//     });
//     for (const key in obj) {
//         result += `${obj[key].length}${key}`
//     }
//     return result
// }
// console.log(torem(str));