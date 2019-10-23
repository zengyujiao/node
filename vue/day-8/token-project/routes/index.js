var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', function (req, res, next) {
  
  let username, password = req.body
  let info = {
    username,password
  }
  // 拿到用户名密码加密生成乱码（令牌）
  const token = Buffer.from(JSON, String(info)).toString('base64')
  res.send(token)
});

router.post('/autologin', function (req, res, next) {
  let { token } = req.body
  // 拿到乱码（令牌）在转成用户名密码
  const info = Buffer.from(token, 'base64').toString('utf8')
  // 有令牌就显示true，没有令牌就显示为false
  res.send(info ? true : false)
})

module.exports = router;
