

           一个简易的数组去重的通用方法，根据场景选用。 --作者：洪坤越
           该方法接受两个参数第一个 原始数组。第二个要去重的维度
            npm  i  distinguish-array-obj
            import distinc from 'distinguish-array-obj'


        const arr=[{id:1,name:'我的',title:'头衔'},{id:2,name:'他的',title:'头衔'},{id:3,name:'他的',title:'头衔'}]
     
        console.log(distinc(arr,'name'))   //
        [
            { id: 1, name: '我的', title: '头衔' },
            { id: 2, name: '他的', title: '头衔' }
        ]
      
     