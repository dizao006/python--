// function huiwen(str) {
//     let left = 0
//     let right = str.length - 1
//     let reg = /[0-9a-zA-Z]/
//     while (left < right) {
//         if (!reg.test(str[left])) {
//             left++
//             continue
//         }
//         if (!reg.test(str[right])) {
//             right--
//             continue
//         }
//         if (str[left].toLowerCase() === str[right].toLowerCase()) {
//             left++;
//             right--
//         } else {
//             return false
//         }
//         return true
//     }
// }
// function huiwen(str) {
//     let left = 0
//     let right = str.length - 1
//     let reg = /[0-9a-zA-Z]/
//     for (let i = 0; i < str.length; i++) {
//         if (!reg.test(str[left])) {
//             left++
//             continue
//         }
//         if (!reg.test(str[right])) {
//             right--
//             continue
//         }
//         if (str[left].toLowerCase() === str[right].toLowerCase()) {
//             left++;
//             right--
//         } else {
//             return false
//         }
//         if (left > right) {
//             return true
//         }
//     }
// }




// let result = huiwen("Madam, in Eden, I'm Adam.")
// console.log(result)
// let s = "Madam, in Eden, I'm Adam."
// console.log(s.toLocaleLowerCase())

//针对不考虑其他情况的
let str = '123321123'
let arr = str.split('').reverse().join('')
if (str == arr) {
    console.log(true)
} else {
    console.log(false);
}