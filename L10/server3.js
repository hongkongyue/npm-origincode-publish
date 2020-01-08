// const express=require('express');
// const bodyParser=require('body-parser');

// var server=express();
// server.listen(8080);

// server.use('/', function (req, res, next){
//   console.log('a');

//   next();
// });

// server.use('/', function (req, res, next){
//   console.log('b');
// });

const express=require('express');
const bodyParse=require('body-parser');

var server=express();
    server.listen(8080);

server.use('/',function(req,res,next){
	req.b=12;
	next();
})
server.use('/',function(req,res,next){
	console.log(req.b)
})