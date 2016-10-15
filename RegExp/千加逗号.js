


// 双replace 叠加
'123456789'.replace(/^(\d{1,3})((\d{3})+)$/,(function(){
    return arguments[1]+','+arguments[2].replace(/\d{3}(?!$)/,function(){
        return arguments[0]+',';
    })
}))

// 根据位置判断
'123456789'.replace(/\d(?!$)/g,function(item,index,content){
    return (content.length-index-1)%3==0?(item+','):item;
})

// 将字符串反转
'123456789'.split('').reverse().join('').replace(/\d{3}(?!$)/g,(item)=>item+',').split('').reverse().join('')