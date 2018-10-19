var express = require('express');
var router = express.Router();
const usersModel = require('../model/usersModel.js');
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
  if(/^w{5,10}$/.test(req.body.username)){
    res.render('werror',{ code: -1, msg: '用户名有误,请重新输入 (必须是 5-10 位)'});
    return;
  }
  //操作数据库写入信息

  //这里的捕获捕获不到， try catch 只能捕获同步的代码
  // try{
  //   usersModel.add(req.body,function(){
  //     if (err) throw err;
  //     //注册成功,跳到登录页面
  //     res.render('login');
  //   });
  // } catch (error) {
  //   console.log(error);
  //   res.render('werror',{ code: -2, msg: error });

  // }
  //err需要时一个  对象  的格式{ code: 0,msg: 'xxx'}
  usersModel.add(req.body,function(err){
    if (err) {
      //如果有错误，直接将错误信息渲染到页面
      res.render('werror', err);
    }else{
      //注册成功
      //不应该渲染，而应该跳转
      //res.render('login');

      res.redirect('/login.html');
    }
  })

});

//登录处理
router.post('/login', function(req, res){
  //调用 userModel 里面的 login方法
  usersModel.login(req.body, function(err, data){
    if(err){
      res.render('werror', err);
    }else{
      //跳转到百度
      console.log('当前登录用户的信息是', data);


      //写  cookie
      res.cookie('username', data.username,{
        maxAge: 1000 * 60 * 10000,   //单位是毫秒。
      })

      res.cookie('nickname', data.nickname, {
        maxAge: 1000 * 60 * 10000,   //单位是毫秒。
      })

      res.cookie('isAdmin', data.isAdmin, {
        maxAge: 1000 * 60 * 10000,   //单位是毫秒。
      })

      res.redirect('/');
    }
  })
})

//退出登录
router.get('/logout', function(req,res){
  //清除cookie
  //跳转  登录页

  res.clearCookie('username');
  res.clearCookie('nickname');
  res.clearCookie('isAdmin');

  res.redirect('/login.html');

  // res.redirect(200,'/login.html');
  // res.location('/login.html');
  // res.end();
})
module.exports = router;
