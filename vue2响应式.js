const obj2 = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        aa: 4,
        dd: 9
    }
}

function isobj(obj) {
    return typeof obj === 'object' && obj !== null && obj !== undefined
}

function observe(obj) {
    for (const k in obj) {
        let v = obj[k];
        if (isobj(v)) {
            observe(v);
        }
        Object.defineProperty(obj, k, {
            get() {
                console.log("读取", k)
                return v
            },
            set(val) {
                if (val !== v) {
                    console.log('genggai')
                    v = val
                }
            }
        })
    }
}
observe(obj2)
obj2.a = 3