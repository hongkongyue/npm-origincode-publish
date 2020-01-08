const querystring=require('querystring');

// module.exports={
//   aaa: function (){
//     return function (req, res, next){
//       var str='';
//       req.on('data', function (data){
//         str+=data;
//       });
//       req.on('end', function (){
//         req.body=querystring.parse(str);
//         next();
//       });
//     };
//   }
// }

// module.exports=function(req,res,next){
//            var str='';
//            req.on('data',function(data){
//                str+=data;
//            })
//            req.on('end',function(){
//                req.body=querystring.parse(str);
//                next()
//            })

// }

// module.exports=function(){
//       return function(req,res,next){
//             var str='';
//             req.on('data',function(data){
//                 str+=data;
//             })
//             req.on('end',function(){
//                  req.body=querystring.parse(str);
//                  next();
//             })
//       }
// }
//第一种调用
 // module.exports=function(req,res,next){
 //        var str='';
 //        req.on('data',function(data){
 //            str+=data;
 //        })
 //        req.on('end',function(){
 //            req.body=querystring.parse(str)
 //            next()
 //        })
 // }
 //第二种调用
 // module.exports=function(){
 //          return function(req,res,next){
 //                 var str='';
 //                 req.on('data',function(data){
 //                    str+=data;
 //                 })
 //                 req.on('end',function(){
 //                   req.body=querystring.parse(str)
 //                   next();
 //                 })
 //          }
 // }
 //第三种调用
  module.exports={
           aaa:function(){
               return function(req,res,next){
                       var str='';
                       req.on('data',function(data){
                            str+=data;
                       })
                       req.on('end',function(){
                            req.body=querystring.parse(str);
                            next()
                       })
               }
           }
  }
