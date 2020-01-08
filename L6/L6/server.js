  const http=require('http')
  const fs  =require('fs')
  const querystring=require('querystring')
  const urlLib=require('url')
  var users={};     //{"blue": "123456", "zhangsan": "123456", "lisi": "321321"}
  var server=http.createServer(function(req,res){
            var str='';
            req.on('data',function(data){
                 str+=data;  //post请求
                 
            })
            req.on('end',function(data){
                  let    obj = urlLib.parse(req.url,true)
                  const  url = obj.pathname
                  const  GET = obj.query
                  const  POST= querystring.parse('str')
                  if(url=='/user'){
                        switch(GET.act){
                              case 'reg':
                              //检查用户名是否已经有了
                              if(users[GET.user]){
                                     res.write("{'ok':false,'msg':'用户已存在'}")
                               }else{
                                    //  users[GET.user]=GET.pass;
                                    //  res.write("{'ok':true ,'msg':'注册成功'}")
                                     if(GET.user&&GET.pass){
                                       users[GET.user]=GET.pass;
                                       res.write("{'ok':true ,'msg':'注册成功'}")
                                     }else{
                                      res.write("{'ok':false ,'msg':'用户名或密码不能为空'}") 
                                     }
                               }
                               break;
                               case 'login':
                                    //  第一步检查用户是否存在   
                                    if(users[GET.user]==null){
                                      res.write('{"ok":false,"msg":"用户不存在"}')
                                    }else if(users[GET.user]!=GET.pass){
                                      res.write('{"ok":false,"msg":"用户名或者密码错误"}') 
                                    }else{
                                      res.write('{"ok":true,"msg":"登录成功"}')  
                                    }  
                               break;
                        }   
                        res.end()
                  }else{
                     let file_name='./www'+url;
                     fs.readFile(file_name,(error,data)=>{
                        if(error){
                          res.write('404')
                        }else{
                          res.write(data)
                        }
                        res.end()
                     })
                        
                  }
            })
  })
// var server=http.createServer(function (req, res){
//   //解析数据
//   var str='';
//   req.on('data', function (data){
//     str+=data;
//   });
//   req.on('end', function (){
//          console.log('请求头：',req.url)
//     var obj=urlLib.parse(req.url, true);

//     const url=obj.pathname;
//     const GET=obj.query;
//     const POST=querystring.parse(str);
//     //区分——接口、文件
//     if(url=='/user'){   //接口
//       switch(GET.act){
//         case 'reg':
//           //1.检查用户名是否已经有了
//           if(users[GET.user]){
//             res.write('{"ok": false, "msg": "此用户已存在"}');
//           }else{
//             //2.插入users
//               if(GET.user&&GET.pass){
//                   console.log('当前的用户是：'+GET.user.length)
//                   console.log('当前的密码是：'+GET.pass.length)
//                 users[GET.user]=GET.pass;
//                 res.write('{"ok": true, "msg": "注册成功"}');
//               }else{
//                   console.log('当前的用户是：'+GET.user.length)
//                   console.log('当前的密码是：'+GET.pass.length)
//                    res.write('{"ok": false, "msg": "用户或密码不能为空"}'); 
//               }
//           }
//           break;
//         case 'login':
//           //1.检查用户是否存在
//           if(users[GET.user]==null){
//             res.write('{"ok": false, "msg": "此用户不存在"}');
//           //2.检查用户密码
//           }else if(users[GET.user]!=GET.pass){
//             res.write('{"ok": false, "msg": "用户名或密码有误"}');
//           }else{
//             res.write('{"ok": true, "msg": "登录成功"}');
//           }
//           break;
//         default:
//            res.write('{"ok": false, "msg": "未知的act"}');
//       }
//           res.end();
//     }else{              //文件
//       //读取文件
//       var file_name='./www'+url;
//       fs.readFile(file_name, function (err, data){
//         if(err){
//           res.write('404');
//         }else{
//           res.write(data);
//         }
//         res.end();
//       });
//     }
//   });
// });
    console.log('服务器跑起来了')
    server.listen(8089);
