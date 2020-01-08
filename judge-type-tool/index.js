module.exports={
               isArray(arr){
                        if(arr instanceof Array){
                             return true
                        }
                        return false
               },
               isArray2(arr){
                        if(Object.prototype.toString.call(arr) == '[object Array]'){
                                return true
                        }
                        return false     
               },
               isArray3(arr){
                            if(Array.isArray(arr)){
                                return true
                        }
                        return false   
               },
               isArray4(arr){
                    if( arr.constructor == Array ){
                              return true
                       }
                        return false
               },
               isArray5(arr){
                        if(arr.__proto__  === Array.prototype){
                            return true
                         }
                         return false
               },
               isObject(obj){
                      if(Object.prototype.toString.call(obj) == '[object Object]'){
                                return true
                        }
                        return false
               },
               isString(str){
                        if(Object.prototype.toString.call(str) == '[object String]'){
                            return true
                    }
                    return false
               },
               isNull(str){
                        if(Object.prototype.toString.call(str) == '[object Null]'){
                            return true
                    }
                    return false
               },
               isUndefined(str){
                        if(Object.prototype.toString.call(str) == '[object Undefined]'){
                            return true
                    }
                    return false
               },
               isNumber(number){
                        if(Object.prototype.toString.call(number) == '[object Number]'){
                            return true
                    }
                    return false
               },
               isNumber2(number){
                        if(typeof(number)){
                            return true
                     }
                    return false
                },
                // console.log(Object.prototype.toString.call("jerry"));//[object String]
                // console.log(Object.prototype.toString.call(12));//[object Number]
                // console.log(Object.prototype.toString.call(true));//[object Boolean]
                // console.log(Object.prototype.toString.call(undefined));//[object Undefined]
                // console.log(Object.prototype.toString.call(null));//[object Null]
                // console.log(Object.prototype.toString.call({name: "jerry"}));//[object Object]
                // console.log(Object.prototype.toString.call(function(){}));//[object Function]
                // console.log(Object.prototype.toString.call([]));//[object Array]
                // console.log(Object.prototype.toString.call(new Date));//[object Date]
                // console.log(Object.prototype.toString.call(/\d/));//[object RegExp]

}