// 把module2文件里面的函数引用进来
const module2 = require("./module2")
const fn = require("./fn")
// 在调用，就可以执行module2里面的函数。
module2()
console.log("1")
// 想使用fn里面的什么方法，后面就加什么。
console.log(fn.bool);