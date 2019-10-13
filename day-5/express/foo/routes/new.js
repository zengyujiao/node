var express = require('express');
var router = express.Router();
const { find } = require("../mongodb/db");

router.get('/', async function (req, res, next) {
    // find（数据库的名字）
    let news = await find("mongn");
    res.json({ news });
});

module.exports = router;
