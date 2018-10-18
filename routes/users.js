var express = require('express');
var router = express.Router();
const usersModel = require('../model/usersmodel.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// //注册页面
// router.get('/register',function(req,res){
//   res.render('register');
// });

//注册处理
router.post('/register',function(req,res){
  console.log('获取传递过来的 post 请求的数据');
  console.log(req.body);
  //1.用户名必须是 5 - 10 的字符
  if(!/w{5,10}/.test(req.body.username)){
    res.render('werror',{ code: -1, msg: '用户名有误,请重新输入 (必须是 5-10 位)'});
  }
  //操作数据库写入信息

   usersModel.add(req.body,function(){
     if (err) throw err;
     //注册成功,跳到登录页面
     res.sender('login');
   });

});
module.exports = router;
