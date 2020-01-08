
这是一个很好的抓取url链接上的很好的方法，简单易用。 --作者：洪坤越

     npm i fetchparams
  
例如 url="www.baidu.com?code=1&id=1212"

  import fetchparams from 'fetchparams'

  let id =fetchparams.getParams().id
    console.log(id) // 1212

