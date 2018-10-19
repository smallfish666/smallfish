//模块：是用来操作users相关的后台数据库处理的代码
//注册操作
//登录操作
//修改操作
//删除操作
//查询列表操作

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const usersModel = { 
    /**
     * 注册操作
     * @param {Object} data  注册信息
     * @param {Function} cb  回调函数
     */
    add(data,cb){

        MongoClient.connect(url,function(err,client){
            if (err) {
                console.log('链接数据库失败', err);
                cb({ code: -100, msg: '链接数据库失败'});
        
                // 这里不需要关闭连接，因为没有连接成功。
                return;
            };
            const db = client.db('smallfish');
        
            //1.  对 data 里面的 isAdmin 修改位 is_admin
            //2.  写一个 ——id 为 1
            //思考 ，下一个注册 ， 先得到之前的用户表的记录条数， +1 操作之后写给下一个注册的人。
            //思考 ， 不容许用户名相同。

            let saveDate = {
                username: data.username,
                password: data.password,
                nickname: data.nickname,
                phone: data.phone,
                is_admin: data.isAdmin
            };

            console.log(saveDate);

            //查询 users  表中是否存在  需要注册的用户
            db.collection('users').find({username: saveDate.username}).count(function(err,num){
                //如果 num 为0 就是没有注册， 否则已经注册了
                if (err) {
                    cb({ code: -101, msg: '查询用户是否已注册失败'});
                    client.close();
                } else if (num !==0) {
                    console.log('用户已经注册过了');
                    cb({ code: -102, msg: '用户已经注册过了'});
                    client.close();
                    
                } else {
                    console.log('用户没有注册，可以进行注册操作');
                    //自增  _id

                    db.collection('users').find().count(function(err,num){
                        if (err) {
                            cb({ code: -101,msg: '查询用户记录条数失败'});
                        } else {
                            saveDate._id = num + 1;

                            db.collection('users').insertOne(saveDate,function(err){
                                if (err) {
                                    cb({ code: -101,msg: '用户注册失败'});
                                } else {
                                    console.log('用户注册成功');
                                    cb(null);
                                }
                                //结束数据库连接
                                client.close();
                            })
                        }
                    })
                }








                // if (num === 0) {
                    
                //     db.collection('users').find().count(function(err, num){
                //         if (err) throw err;
                //         saveDate._id = num + 1;
                //         console.log(saveDate);
                    
        
                //     db.collection('users').insertOne(saveDate,function(err){
                //         if(err) throw err;
                //         cb(null);
                //         client.close();
                //     })
                // });
                // } else{
                //   cb('已经注册过了');
                //   client.close();
                // }
            })

        })
    }
}

module.exports = usersModel;