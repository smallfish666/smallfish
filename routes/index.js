var express = require('express');
var router = express.Router();

//首页
router.get('/', function(req, res, next) {
  //判断用户是否已经登录， 如果登录就返回首页， 否则返回  登录页面
  if (req.cookies.username){
    res.render('index',{ title: 'Express' });
  }else{
    //跳转到登录页面
    res.redirect('/login.html');
  }
});

//注册页面
router.get('/register.html',function(req,res){
  res.render('register');
});

//登录页面
router.get('/login.html',function(req,res){
  res.render('login');
});


module.exports = router;
