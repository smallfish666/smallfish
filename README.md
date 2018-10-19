#数据库的表结构设计

####  用户表

-username not null
-password not null
-nickname not null
-sex   default 0
-age   default ''
-iphone  default ''
-is_admin  default 0 - 不是管理员 1 - 是管理员



# 登录 

userModel1.js 定义  login   的方法，  查找数据库
。find({username: username, password: password}).count(err, num)

登录之后会跳转到首页， 首页需要当前登录用户的用户名， 是否是管理员

.find({username: username, password: password}).toArray(function(err, data) {
    data  不为空数组， 就说明可以登录

    data[0] {}
})

#  一般网站的实现

如果用户没有登录的话， 书不是看不到首页， 或者其他除了（登录，注册）的页面

？ 怎么判断用户在我们的网站上，是否登录

cookies   localstroage
怎么用：
 用户在登录的时候， 如果登录成功， 就将用户的一些信息写入到 cookies 或者   本地存储中。

 其余需要验证用户是否登录页面， 就验证以下是否有 cookies 或者有本地存储， 有的话就正常显示， 没有的话， 就给打回到登录页面。

 #首页

 