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