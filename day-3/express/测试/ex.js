// 引用这个模块
const express = require("express")
// 把express赋值给app
const app = express();
// 发get请求，“/”这个是你执行时listen:3000后面的加一个/，也是路径，3000不加/也可以。
app.get("/", function (req, res) {
    res.send("Hello World")
  })
   
app.post('/home', function (req, res) {
  // 修改响应头，允许跨域
  res.append('Access-Control-Allow-Origin', '*');
  res.append('name', 'yao one');
  res.send('home')
})

app.listen(3010)
console.log("启动成功");