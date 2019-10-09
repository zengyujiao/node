function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("你好");
            resolve();
        }, 1000);
    })
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("b");
            resolve();
        }, 800);
    })
}
a().then(b);

// 用定时器来控制内容的先后输出，如果直接调用，那么b先执行。
// 如果在a调用之后在一个then，把b传进去，那么a就先执行。
