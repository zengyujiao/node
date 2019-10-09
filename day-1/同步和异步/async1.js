// resolve:成功；reject:失败
function a() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("a");
            resolve();
        },1000)
    })
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("b");
            resolve();
        },800)
    })
}

(async () => {
    await a();
    await b();
})()

// 如果按照正常的执行顺序，因为定时器是异步，传入的定时时间越小，就先执行，所有b先执行
// 在调用的前面加一个await方法，不管你传入的定时时间是多少，都是先执行加了await方法的函数
