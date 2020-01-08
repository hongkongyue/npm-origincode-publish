module.exports={
         getProperty(orignArr,props,params1,params2){
            if(orignArr instanceof Array){
                for(let i=0,len=orignArr.length;i<len;i++){
                    if(orignArr[i].hasOwnProperty(props)&&orignArr[i].hasOwnProperty(params2)){
                         if(orignArr[i][props]==params1){
                             return orignArr[i][params2]
                         }
                    }
                }
             }
    },
        getObj(orignArr,props,params1){
            if(orignArr instanceof Array){
                for(let i=0,len=orignArr.length;i<len;i++){
                    if(orignArr[i].hasOwnProperty(props)){
                        if(orignArr[i][props]==params1){
                            return orignArr[i]
                        }
                    }
                }
            }
        }
}
