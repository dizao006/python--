let reg = /\d+/g;
let s = '12346asda12347asd1234'
// console.log(reg.test(12345)) 
// console.log(reg.exec(s));
//字符串中的正则


//得到所有的匹配结果
let result= s.match(reg)  
console.log(result)


//返回匹配的第一个下标
// let result=s.search(reg) 
// console.log(result)

//分割
// let b='asd_asdasd\tasdzxcm asd;l asd qwe,asd'
//  let result=b.split(/[\_\t;, ]/g)   
//  console.log(result)   

//替换
// let b='asd_asdasd\tasdzxcm asd;l asd qwe,asd'
// let resut=b.replace(/[\_\t; ]/g,',')
// console.log(resut)

// let c = 'hello world' //replace 第二个参数可以写成函数的形式，函数的参数是匹配到的结果
// let result = c.replace(/\b[a-z]/g, (e) => {
//     return e.toUpperCase()
// })
// console.log(result)







// test
// 匹配中文
// let regs = /[\u4e00-\u9fa5]/g //其中\u4e00-\u9fa5是中文字符的范围
// var ss = 'asdasdasdas阿松大阿松大asdqw请问qweqwe仔细擦拭的'
// const result= ss.match(regs)
// console.log(result)

// 过滤敏感词
//替换
// let arr = ['傻逼', '2b', '贸易战', '卢本伟']

// function removewords(s, world) {
//     let reg = new RegExp(arr.join('|'), 'g')
//     return s.replace(reg, world)
// }


// let resa = removewords('asdasd傻逼asdasd2basdas贸易战asdasd卢本伟', '****')
// console.log(resa)


const _searchStrIndexOf = (str, target) => {
    // 补全代码

    let reg =new RegExp(target, 'g')
    let s = str.match(reg, target)
    return s.length
}
_searchStrIndexOf('sdffgfdfdgfdw', 'fd')

// let re=/fd/g
// let str='sdffgfdfdgfdw'
// console.log(str.match(re)) 