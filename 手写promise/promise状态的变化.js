class MyPromise {
    constructor(executor) {

        executor()
    }
    _reslove(data) {
        //标记当前任务完成

    }
    _reject(err) {
        //标记当前任务失败
    }
}

new Promise((resolve, reject) => {

})