

let box = document.getElementById('box');
let content=document.getElementById('content');
let inner=document.getElementById('inner');


let move=()=>{
    content.scrollLeft+=1;
    if(content.scrollLeft+content.clientWidth==content.scrollWidth){
        content.scrollLeft=inner.scrollWidth-parseInt(getCSS(content,'width'));
    }
}

let timer=setInterval(move,10);

box.onmouseover=()=>{
    clearInterval(timer);
}

box.onmouseout=()=>{
    timer = setInterval(move,10);
}


let getCSS=(curEle, attr)=> {
    let result,reg;
    try {
        if (window.getComputedStyle) {
            result = window.getComputedStyle(curEle, null)[attr];
        } else {

            //兼容特殊样式属性
            if(attr=='opacity'){
                // 获取的IE下对应样式的值 
                result=curEle['currentStyle']['filter'];
                reg=/^alpha\(opacity=(\d+(?:\.\d+)?)\)$/i;
                result=reg.test(result)?reg.exec(result)[1]/100:void 0;
            }

            // 兼容的IE678
            result = curEle['currentStyle'][attr];
        }
    } catch (error) {
        return void 0;
    } finally {
        // 有的样式属性不能够去单位
        reg=/^(-?\d+(\.\d+)?)(px|pt|em|rem)?$/i;
        return reg.test(result)?parseFloat(result):result;
    }
}