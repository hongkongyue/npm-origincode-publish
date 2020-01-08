var tool=require('deal-array-property')
let arr=[{id:12,name:'洪坤越',age:26},{id:13,name:'张三',age:27},{id:15,name:'李四',age:29},] 
console.log(tool.getProperty(arr,'id',12, 'age'     ))  //根据id查询age     返回的age值是26
console.log(tool.getProperty(arr,'name', '李四', 'age')) //根据name查询age  返回的age值是29