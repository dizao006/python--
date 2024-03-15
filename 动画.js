// 动画效果的实现
function createAnimation(options) {
    var form = options.form  //开始值
    var to = options.to   //结束值
    var totalMS = options.totalMS || 1000  //变化总时常
    var duration = options.duration || 15;//变化间隔
    var times = Math.floor(totalMS / duration);//变化次数,向下取整
    var dis = (to - form) / times   //每次变化的值
    var curTime = 0   //当前变化的次数
    var timesId = setInterval(function () {
        form += dis;
        curTime++;   //变化增加一次
        if (curTime >= times) {
            form = to;  //变化完成
            clearInterval(timesId);//函数停止
            options.onend && options.onend()
        }
        //这个地方存在无线可能，需要用户通过不同的需求，完成
        //此时已经知道form的位置，就是什么时候要做什么，但是
        //需要用户自己提供要做的东西，本函数只提供什么时候要做
        //可以思考已经点击函数， addEventListener('click',function(){})
        //同样的道理， addEventListener是本身提供的一个函数，click确定了该函数
        //什么时候要做，及用户点击的时候要做什么，后面紧跟的函数则具体表明
        //要做什么，通过前一个click提供具体什么时候要做，后面的函数具体做什么
        //本动画过渡效果则类似该情况，由createAnimation充当click提供什么时候做
        //onmove，onend充当后面紧跟的函数具体执行什么
        options.onmove && options.onmove(form);//判断是否存在onmove函数，存在才运行
    }, duration)
}
// createAnimation({
//     form: 120,
//     to: 0,
//     totalMS: 500,
//     duration: 10,
//     onmove: function (n) {
//         //回调模式，当前函数知道要做什么，但是不知什么时候要做，而上面的函数知道什么时候
//         // 要做什么，但不清楚要做什么，所以需要通过回调模式，让两者函数相互结合，共同完成
//         //

//     },
//     onend: function () {

//     },

// })






