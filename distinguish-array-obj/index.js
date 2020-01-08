module.exports= function (arr,params){
                 let hash = {};
                    return arr.reduce((item, next) => {
                        hash[next[params]]? '': hash[next[params]]= true && item.push(next);
                        return item
                    }, []);
            }
