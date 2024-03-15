Function.prototype.Mybind = function (ctx) {
    var ars = Array.prototype.slice.call(arguments, 1)
    var fn = this
    return function A() {
        var ars2 = Array.from(arguments)
        var allArs = [...ars, ...ars2]
        if (Object.getPrototypeOf(this) === A.prototype) {
            return new fn(...allArs)
        } else {
            return fn.apply(ctx, allArs)
        }
    }
}

function s(a, b, c, d) {
    console.log(this)
    console.log(a, b, c, d)
    return 123
}
const nsf = s.Mybind('ctx', 1, 2)
const result = new nsf(3, 4)
const result2 = nsf(3, 4)
console.log(result,result2)