const request = require("request");
const { insert } = require("../mongodb/db");
request("https://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1F52DFAF16800C&cp=5DA1A850805CDE1&min_behot_time=0&_signature=oRZCRAAA.MZJzGA5rf5lb6EWQl&i=", function (error, response, body) {
    const news = JSON.parse(body).data;
    news.forEach(element => {
        console.log(element.title)
        console.log(element.abstract)
        console.log(element.image_list)
        // 添加数据到数据库，表名为：mongn
        insert("mongn", [{
            title: element.title,
            abstract: element.abstract,
            image_list:element.image_list
        }])
    });
})