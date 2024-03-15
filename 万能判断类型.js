function isType(date) {
    return Object.prototype.toString.call(date).slice(8, -1)
}
// console.log(isType(/reg/))