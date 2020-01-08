
    一个简易的封装清空对象属性值得通用方法，根据场景选用。 --作者：洪坤越
     tips:该对象的可描述对象的可枚举属性不能设置为false


     npm i clear-obj-property
     import tool from 'clear-obj-property'
     该方法接受一个参数即要清空的对象，返回属性值为空的对象

     let obj={name:'洪坤越',company:'衣品天成',id:'04582',job:'前端开发工程师'}
     
     console.log(tool(obj))  //{name:'',company:'',id:'',job:''}
      
     