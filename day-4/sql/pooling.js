// 下载好这个模块之后，在导入进来
var mysql = require("mysql");
// 导入封装好的域名方法
var conling = require("./config");
var pool = mysql.createPool({
    // 连接池创建的最大连接数：connectionLimit
    connectionLimit:10,
    // 用es6的扩展运算符来拿到conling里面的域名，用户名等等。
    ...conling
});

// 把这个（SELECT * FROM sjk）以参数的方式传进去
let sql = (sql) => {
    return new Promise((reslove, reject) => {
        pool.getConnection(function (err, connection) {
            // 可以去掉连接和关闭，这里接收这个参数，
            connection.query(sql, function (error, results, fields) {
                if (error) {
                    throw error;
                    reject(error);
                }
                // 如果成功来到这里，就打印数据库里面的数据
                else {
                    reslove(results);
                }
                // 释放连接
                connection.release();
            });
        })
    })
}
// 把上面封装的函数导出
module.exports = sql
