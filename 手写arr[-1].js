let arr = [1, 2, 3, 4, 5]
const proxyAry = (arr) => {
    const len = arr.length
    return new Proxy(arr, {
        get(target, key) {
            key = +key
            if (key < 0) {
                key += len
            }
            return target[key]
        }
    })
}
let s = proxyAry(arr)
console.log(s[-2]);