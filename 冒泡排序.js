let arr = [1, -2, 3, 6, -9, 5, 8, 10, 6, -15]

function mpSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
    //测试
}
let result = mpSort(arr)
console.log(result)