function fbc(n) {
    if (n < 2) {
        return 1
    } else {
        let s = fbc(n - 1) + fbc(n - 2)
        return s
    }
}
console.log(fbc(3))