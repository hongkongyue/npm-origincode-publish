// const express=require('express');

// var server=express();
// server.listen(8080);

// //GET、POST
// server.use('/', function (req, res){
//   	console.log(req.query); //GET
// });
//express框架的应用表现为
 const express=require('express');
 var server=express();
     //get请求方式；
     server.use('/',function(req,res){
     	console.log(req.query);//这里的表现为req的封装的请求的方法；
     	console.log(req.query);//这里的表现为req的封装的请求的方法；
     })
     server.listen(8080)
