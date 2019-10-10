const http = require("http")
// console.log(http)
// request:请求头和请求体
// response：响应头和响应体
http.createServer((request, response) => {
    // 如果要跨域，需要设置一下命令
    response.setHeader("Access-Control-Allow-Origin", "*");
    // 设置响应头
    response.setHeader("name", "hshiq")
    // 设置响应体
    response.write(JSON.stringify({
        name: "gg",
        skill:["ps","css"]
    }))
    response.end()
    // listen(123):设置状态码
}).listen(11198)
console.log("启动服务器");