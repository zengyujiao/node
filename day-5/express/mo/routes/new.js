var express = require('express');
var router = express.Router();
// 后端暴露出来的接口，前端直接使用这个接口就可以了
const { find } = require("../mongodb/db");

router.get('/', async function (req, res, next) {
    // find（数据库的名字）
    let news = await find("mongn");
    res.json({ news });
});

module.exports = router;
