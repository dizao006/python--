function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        }, time)
    })
}
delay(1000).then((e) => {
    console.log(e)
})