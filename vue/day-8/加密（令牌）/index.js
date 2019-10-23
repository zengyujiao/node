// 设置一个用户名密码
let info = { user: "iop", password: "123456qw" }

// 拿到用户名密码加密生成乱码（令牌），这样就比较安全一些
const toke = Buffer.from(JSON.stringify(info)).toString("base64")
console.log(toke)

console.log("--------------------")

const crypto = require('crypto')
// 拿到上面已经加密过的数据继续在这个基础上加密
const secret = "qwer";
const hash = crypto.createHmac("sha256", secret)
    .update(toke)
    .digest("hex");
console.log(hash)