// 拿到令牌
let roe = "eyJ1c2VyIjoiaW9wIiwicGFzc3dvcmQiOiIxMjM0NTZxdyJ9";
// 解密是跟加密相反的方法
const token = Buffer.from(roe, "base64").toString("utf8");
console.log(token);