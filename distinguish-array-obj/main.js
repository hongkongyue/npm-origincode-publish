let distinck=require('distinguish-array-obj')
const arr=[{id:1,name:'我的',title:'头衔'},{id:2,name:'他的',title:'头衔'},{id:3,name:'他的',title:'头衔'}]
console.log(distinck(arr,'name'))