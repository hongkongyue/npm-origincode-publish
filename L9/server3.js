const express=require('express');
const expressStatic=require('express-static');

var server=express();
    server.listen(8080);

var users={
	      'zhangsan':'123456',
          'lisi'    :'123456',
          'wangwu'  :'123456'
};
//处理接口；
server.get('/login',function(req,res){
  //利用express框架的方法 req.query可以直接解析为对象
   console.log(req.query);
   const user=req.query['user'];
   const pass=req.query['pass'];
   if(users[user]){
        if(users[user]!=pass){
        res.send({ok:false,msg:'用户名或密码错误'})	
        }else{
        res.send({ok:true,msg:'登陆成功'})	
        }
   }else{
   	    res.send({ok:false,msg:'用户不存在'})
   }
})
//处理文件；
server.use(expressStatic('./www'));