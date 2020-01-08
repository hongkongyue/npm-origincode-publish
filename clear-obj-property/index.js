module.exports=function(obj){
       if(Object.prototype.toString.call(obj)=='[object Object]'){
                for(let i in obj){
                     obj[i]=''    
            }
            return obj
        } 
}
