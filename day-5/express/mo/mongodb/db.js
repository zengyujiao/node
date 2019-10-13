const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// 连接数据库的端口地址
const url = 'mongodb://localhost:27017';
 
// 数据库的名字
const dbName = 'mong';

// 封装成一个方法，方便以后使用
const connect = () => {
  return new Promise((resolve, reject) => {
    // 连接到服务器
    MongoClient.connect(url, function(err, client) {
      assert.equal(null, err);
      // 用三元运算符来进行判断
      err ? reject(err) : resolve(client);
    });
  })
}

// 封装添加（insert）方法,(insertMany)添加所有,(insertOne)添加一条
const insert = (col, query) => {
  return new Promise(async (resolve, reject) => {
    // 在这里调用上面的方法
    const client = await connect();
    // 选中需要连接的库
    const db = client.db(dbName);
      // 选中对应的集合（表）
    const collection = db.collection(col);
    // 添加数据到数据库 insertMany（先用一个数组，在数组里面传入对象，比如{a:1}）
    collection.insertMany(query, function(err, result) {
      err ? reject(err) : resolve(result);
    });
    // client.close();
  })
}

// 封装查找(find)方法
const find = (col, query) => {
  return new Promise(async (resolve, reject) => {
    const client = await connect();
    const db = client.db(dbName);
    const collection = db.collection(col);
    // 查找数据库里面表的数据，find({传入一个键值对，比如：a:1}),查找有没有这条数据,如果沒有传递数据，那么默认打印所有数据出来
      collection.find({...query}).toArray(function(err, docs) {
        err ? reject(err) : resolve(docs);
      });
  })
}

// 封装更改（update）方法
const update = (col,query,query2) => {
  return new Promise(async(resolve,reject) => {
    const client = await connect();
    const db = client.db(dbName);
    const collection = db.collection(col);
     // 修改数据库里面表的数据，updateOne（修改一条），如果想修改多条用（updateMany）,然后assert.equal(你要修改的数量, );
     collection.updateMany({...query}, { $set: {...query2} }, function(err, result) {
        err ? reject(err) : resolve(result);
    });
  })
}

// 封装删除（remove）方法
const remove = (col, query) => {
  return new Promise(async (resolve, reject) => {
    const client = await connect();
    const db = client.db(dbName);
    const collection = db.collection(col);
    // 删除数据库里面表的数据，deleteOne（删除一条），如果要删除多条用（deleteMany）,然后在 assert.equal(你要删除的数量, );
    collection.deleteMany(query, function(err, result) {
      err ? reject(err) : resolve(result);
    });
  })
}

module.exports = {
  insert,
  find,
  update,
  remove
}