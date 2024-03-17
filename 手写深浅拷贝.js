// 深拷贝
//重新创建内存地址，新的数据不会影响另外的数据
// 1 jJSON.parse(JSON.stringify())
let stu = {
    name: 's',
    deepStu: {
        a: 2
    },
    say() {
        console.log('asd')
    }
}
// let stu2 = JSON.parse(JSON.stringify(stu))  //新拷贝的对象会丢失原来的方法
// stu2.name = 'w'
// console.log(stu2, stu)

//递归写深拷贝
function deepClone(target) {
    let restult
    if (typeof target === 'object') {
        if (Array.isArray(target)) {
            restult = []
            for (const i in target) {
                restult.push(deepClone(target[i]))
            }
        } else if (target == null) {
            restult = null
        } else if (target.constructor === RegExp || target.constructor === Date) {
            restult = target
        } else {
            //说明是一个对象
            restult = {}
            for (const i in target) {
                restult[i] = (deepClone(target[i]))
            }
        }
    } else {
        restult = target
    }
    return restult
}
let stu2 = deepClone(stu)
console.log(stu2)
//浅拷贝
//只拷贝基本类型的数据，而引用类型复制后也会发生引用，浅拷贝只赋值某个对象的引用类型，而不复制对象本身，共享一块内存
//1 直接赋值
// let stu = {
//     name: 's',
//     deepStu: {
//         a: 2
//     }
// }
// let stu2 = stu
// stu2.name = 'w'
// console.log(stu.name, stu2.name) 


//2 object.assign
// Object.assign(stu, {
//     name: 'w',
//     age: '20',
// })
// console.log(stu)
// //object.assign浅拷贝
// let stu2 = Object.assign({}, stu)
// console.log(stu2)

//这两个如果知识单纯的数据，其实并没有影响，如果里面存在对象，则会触发浅拷贝
//展开运算符
// var stu2 = {
//     ...stu,
//     age: '20'
// }
// stu2.name = 'w'
// stu2.deepStu.a = 5
// console.log(stu2, stu)


//slice 与concat
// let arr = [1, 3, 6, {
//     a: 2
// }]
// let arr2 = arr.slice()
// arr2[0] = 100,
//     arr2[3].a = 1000
// console.log(arr, arr2)