//模块：是用来操作users相关的后台数据库处理的代码
//注册操作
//登录操作
//修改操作
//删除操作
//查询列表操作

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:12017';
const usersModel = { 
    /**
     * 注册操作
     * @param {Object} data  注册信息
     * @param {Function} cb  回调函数
     */
    add(data,cb){

        MongoClient.connect(url,function(err,client){
            if (err) throw err;
            const db = client.db('smallfish');
        
            db.collection('users').insertOne(data,function(err){
                if(err) throw err;
                cb(null);
            })

            client.close();
        })
    }
}

module.exports = usersModel;