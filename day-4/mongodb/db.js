const MongoClient = require('mongodb').MongoClient;

// 连接到这个服务器
const url = 'mongodb://localhost:27017';
 
// 数据库的名字
const dbName = 'lj';
 
// 使用connect方法连接到服务器
MongoClient.connect(url, function(err, client) {
    // console.log("Connected successfully to server");
    const db = client.db(dbName);
    db.collection("sjk").find().toArray(function (err, result) {
        if (err) {
            console.log("error:" + err);
            return;
        }
        console.log(result);
    })
    client.close();
});