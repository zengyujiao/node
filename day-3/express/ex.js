const express = require('express')
const app = express()

// 前端发来get请求，并且路径后缀为/才会执行下面的代码
app.get('/hone', function (req, res) {
    res.send('Hello World')
})
 
app.listen(3010)