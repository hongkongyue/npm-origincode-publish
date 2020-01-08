const http=require('http');
const fs  =require('fs');
const querystring=require('querystring');
const urlLib=require('url');

var users={};//{"zhangsan":"123456","lisi":"123456","wangwu":"123456"}

var server=http.createServer(function(req,res){
	   //post请求数据解析；
       var str='';
       req.on('data',function(data){
       	   str+=data;
       })
       req.on('end',function(){
       	  var obj=urlLib.parse(req.url,true);
       	  var url=obj.pathname,
       	      GET=obj.query;
       	  var POST=querystring.parse(str)
       	  //读接口
         if(url=='/user'){
             switch(GET.act){
                  case 'reg':
                   //1.检查用户名是否存在
                   if(users[GET.user]){
                   			res.write('{"ok":"false","msg":"用户已经存在"}')
                   }else{
                   	//2.插入用户
                   	     if(GET.user&&GET.pass){
                   	           users[GET.user]=GET.pass;
                   			       res.write('{"ok":"true","msg":"你已经注册成功"}')	
                   	        }
                   	      if(!GET.user||!GET.pass){
                   	           res.write('{"ok":"false","msg":"用户名或密码不能为空"}')
                   	        }
                   	        
                   }
                  break;
                  case 'login':
                     //1.检查用户是否存在
                    if(users[GET.user]==null){
                       res.write('{"ok":"false","msg":"用户不存在"}')
                    }else if(users[GET.user]!=GET.pass){
                       res.write('{"ok":"false","msg":"用户名或密码错误"}')
                    }else{
                       res.write('{"ok":"true","msg":"登录成功"}')
                    }
                  break;
                  default:
                       res.write('{"ok":"false","msg":"未知的act错误"}')
                  break;
             }
             console.log(url,GET,POST,users)
             res.end()
          }
       	  //读文件
       	 else{
           var file_name='../www'+url;
       	   fs.readFile(file_name,function(err,data){
       	  	if(err){
       	  		res.write('404')
       	  	}else{
       	  		res.write(data)
       	  	}
       	  	res.end()
       	  })
       	 }
       })

	})
server.listen(8080)