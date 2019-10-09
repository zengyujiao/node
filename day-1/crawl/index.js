// 引用这些模块，需要下载它们
const request = require("request");
const fs = require("fs");
const jsdom = require("jsdom");
const {JSDOM} = jsdom;

// 这个路径是你要获取的页面路径
request("https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%B9%B7%B9%B7", function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.

    // 因为npm里面没有dom跟bom,所有需要模拟它们的操作才可以用$
    const { window } = new JSDOM(body);
    const $ = require("jquery")(window);
    // // 获取链接里面的图片。
    $("img").each((index, element) => {
        console.log($(element).attr("src"));
    })
});