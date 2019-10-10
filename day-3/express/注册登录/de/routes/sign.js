var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    let {
        username,
        password
    } = req.body
    if (username === 'qwe' && password === '123') {
        res.json({
            status: 1,
            msg: '登录成功'
        });
    } else {
        res.json({
            status: 0,
            msg: '登录失败'
        });
    }
    // console.log(req.body)

});

router.listen(3000);
console.log("成功")
module.exports = router;
