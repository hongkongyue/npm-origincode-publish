// const express=require('express');
// const querystring=require('querystring');
// const bodyParser=require('body-parser');

// var server=express();
// server.listen(8080);

// 如何写一个中间件/模块/组件
/*
server.use(function (req, res, next){
  var str='';
  req.on('data', function (data){
    str+=data;
  });
  req.on('end', function (){
    req.body=querystring.parse(str);

    next();
  });
});
*/

// server.use(bodyParser.urlencoded({}));

// server.use('/', function (req, res){
//   console.log(req.body);
// });
const express =require('express');
const querystring=require('querystring');
const bodyParse=require('body-parser');
    
  var server=express();
      server.listen(8080);
//如何编写一个中间件，供自己及别人使用；
server.use(function(req,res,next){
	      var str='';
	 req.on('data',function(data){
	 	    str+=data;
	 })
	 req.on('end',function(){
	      req.body=querystring.parse(str);
	      next();
	 })
})
server.use('/',function(req,res,next){
       console.log(req.body)
})