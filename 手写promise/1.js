let obj = {
    a: 1,
    v: 2,
    c: {
        s: 1,
        d: {
            oj: 2
        }
    }
}
let {
    a,
    v
} = obj
console.log(a, v)
a = '13'
console.log(a, obj)