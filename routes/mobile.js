var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
//引入multer  并设置好默认的一个tmp目录
const multer = require('multer');
const upload = multer({
    dest:"I:/tmp/"
})
const fs = require('fs');
const path = require('path');
//手机新增
router.post('/add',upload.single('mobile'),function(req,res){
    //这个时候，req上面就有一个 req.file 这个属性，这个属性是一个对象，对象里面就是我上传的这个文件的一些属性

    //并且multer 还会吧其余的一些 数据 放到 req.body 里面

    console.log(req.file);

    console.log(req.body);

    //上传到临时的目录是ok了， 下面需要做什么

    //1.需要将  临时目录下的文件， 移动到 public 里面  moblies 下面 fs

    //1.1 读

    false.readFile(req.file.path,function(err,data){
        if(err){
            console.log('读文件失败',err);
        }else{
            //1.1写
            //ps 为了解决文件名冲突的问题，可以怎么处理
            var fileName = new Date().getTime() + '_' + req.file.originalname;
            var des_file = path.resolve(__dirname,'../public/mobilrs',req.fileName);
            console.log(des_file);
            fs.writeFile(des_file,data,function(err){
                if(err){
                    console.log('写入失败',err);
                }else{
                    console.log('写入成功');


                    //最终写入到数据库的时候，我们的图片信息就可以写一个路径进去，那么页面渲染的时候就用这个地址就行。
                    //public/mobiles/ +fileNmae
                    //fileName
                }
            });
        }
    });
    res.send();

        //退出登录
        router.get('/logout', function(req,res){
        //清除cookie
        //跳转  登录页
    
        // if(!req.cookies.username){
        //   res.redirect('/login.html');
        // }
    
        res.clearCookie('username');
        res.clearCookie('nickname');
        res.clearCookie('isAdmin');
    
        res.send('<script>location.replace("/")</script>');
    
        //res.redirect('/login.html');
    
        // res.redirect(200,'/login.html');
        // res.location('/login.html');
        // res.end();
   })
});
module.exports = router;