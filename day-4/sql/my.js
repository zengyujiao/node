// 连接模块
var mysql = require('mysql');
var connection = mysql.createConnection({
    // 域名
    host: 'localhost',
    // 用户名
    user: 'root',
    // 密码
    password: '',
    // 数据库名字
    database : 'lj'
});
// 执行连接
connection.connect();
// 拿到数据库里面的表（sjk），在全部拿出来（SELECT * FROM）
connection.query('SELECT * FROM sjk', function (error, results, fields) {
    if (error) throw error;
    // 打印拿到数据库里面的数据
    console.log(results[0].name);
});
// 结束
connection.end();