const request = require("request");
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

request("https://588ku.com/?h=bd&sem=1&kw=bd0025842", function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    const { window } = new JSDOM(body);
    const $ = require("jquery")(window);
    let imgArr = [];
    let offset = 0;
    // 把图片遍历出来，放到数组中去
    $("img").each((index, element) => {
        let src = $(element).attr("src")
        imgArr.push(src)
    })
    // 利用定时器下载图片
    setInterval(() => {
        console.log(`正在下载第${offset + 1}图片，地址为：${imgArr[offset]}`)
        if (imgArr[offset].indexOf('http') >= 0) {
            request(`${imgArr[offset]}`).pipe(fs.createWriteStream(`./img/${offset}.png`))
        } else {
            request(`http:${imgArr[offset]}`).pipe(fs.createWriteStream(`./imgs/${offset}.png`))
        }
        offset++;
    }, 1000);
});