'use struct'

var oUl=document.getElementsByTagName('ul')[0];
var oLis=document.getElementsByTagName('li');

[].forEach.call(oLis,(item,index)=>{

    // 鼠标划过
    item.onmouseover=function(){
        this.style.backgroundColor='blue';
    }
    // 鼠标移出
    item.onmouseout=function(){
        this.style.backgroundColor='';
    }
})
document.createDocumentFragment

document.appendChild(Fragment)