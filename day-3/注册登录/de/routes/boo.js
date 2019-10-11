const express = require('express');
const router = express.Router();
 
router.post('/', function (req, res, next) {
    // 拿到用户名和密码
    let {
        username,
        password
    } = req.body
    // 检查如果用户名是zxc,密码是123456，就显示登录成功，如果用户名不正确，那么就登录失败
    if (username === "zxc" && password === "123456") {
        res.json({
            status: 1,
            msg: "登录成功"
        });
    }
    else {
        res.json({
            status: 0,
            msg: "登录失败"
        });
    }
});
 
// 把函数导出
module.exports = router;