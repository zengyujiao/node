function a() {
    console.log("a");
}

function b(Callback) {
    setTimeout(() => {
        console.log("b");
        Callback(a);
    },1000)
}
b(a);

// 如果加入一个回调函数，那么就会变成一个异步请求，
// 如果函数中有回调函数，那么一般是异步
// 如果没有回调函数，那么异步没有意义