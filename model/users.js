//模块：是用来操作users相关的后台数据库处理的代码
//注册操作
//登录操作
//修改操作
//删除操作
//查询列表操作

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';

MongoClient.connect(url,function(err,client){
    if(err) throw err;
    const db = client.db('smallfish');

    db.collection('users').insertOne();
})