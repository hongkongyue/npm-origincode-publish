
    一个根据数组对象的属性返回另一个属性的通用方法。 --作者：洪坤越
    1.0.1新增 获取整个对象的方法


     npm i deal-array-property 
     import tool from 'deal-array-property'
     该方法接受四个参数
     第一个参数：要处理的数组；
     第二个参数：要依赖的属性
     第三个参数：要依赖的属性的值
     第四个参数：要得到返回的属性的值
     let arr=[{id:12,name:'洪坤越',age:26},{id:13,name:'张三',age:27},{id:15,name:'李四',age:29},]
     
     console.log(tool.getProperty(arr,'id',12, 'age'     ))  //根据id查询age     返回的age值是26
     console.log(tool.getProperty(arr,'name', '李四', 'age')) //根据name查询age  返回的age值是29
      
    1.0.1新增
    console.log(tool.getObj(arr,'id',12))   //根据属性返回 整个对象  // {id:12,name:'洪坤越',age:26}

     