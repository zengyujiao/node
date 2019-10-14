const $ = require("jquery");
// $("body").html("A heppy day");
// console.log("hello");

// const txt = require("./index.txt")
const html = require("./index.html")

// const jade = require("./index.jade")
// require("./index.ts")
require("./index.css")
// require("./index.scss")
$("body").html(html);

// const fn = (a) => (a + b)

// let { a } = {
//     a: 'name',
//     b: 'skill'
// }

// let b = [a, ...[1, 2, 3]]


// 拿到按钮标签，并且添加点击事件
$("#btn").click(async () => {
    // 拿到两个输入框的值
    let username = $("#inputUsername").val();
    let password = $("#inputPassword").val();
    
    if (username === 'zxc' && password === '123456') {
        alert("登录成功");
        location.href = "https://www.baidu.com";
    } else {
        alert("登录失败");
    }
})