function add(n1, n2) {
    let len = Math.max(n1.length, n2.length)
    let s1 = n1.padStart(len, 0)
    let s2 = n2.padStart(len, 0)
    let result = ''
    let jinwei = 0
    for (let i = len - 1; i >= 0; i--) {
        let sum = +s1[i] + +s2[i] + jinwei
        if (sum >= 10) {
            jinwei = 1
        } else {
            jinwei = 0
        }
        let ge = sum % 10
        result = ge + result
    }
    console.log(result)
}

// function add(n1, n2) {
//     console.log(n1, n2)
//     let len = Math.max(n1.length, n2.length)
//     let s1 = n1.padStart(len, 0)
//     let s2 = n2.padStart(len, 0)
//     let jinwei = 0
//     let result = ''
//     for (let i = len - 1; i >= 0; i--) {
//         const sum = +s1[i] + +s2[i] + jinwei
//         const r = sum % 10
//         jinwei = Math.floor(sum / 10)
//         result = r + result
//     }
//     console.log(result)
// }

// let s1 = '123123564981238973128478421389456132'
// let s2 = '312879643218978795163219844821385654547454'
// add(s1, s2)
add('191', "21")