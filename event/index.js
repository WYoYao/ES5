var oDiv = document.getElementById('box');
var oTxt = document.getElementById('txt');
oDiv.onclick=function(e){
    e=e||window.event;
    // clientX clientY 距离当前屏幕的 Left Top 值
    console.log('距离当前屏幕的',e.clientX,e.clientY);
    // 触发的行为类型
    console.log('触发的行为类型',e.type);
    // 当前的鼠标触发的元素,他的值就是哪个元素 IE8以下不兼容
    e.target=e.target||e.srcElement;
    console.log('当前的鼠标触发的元素',e.target);

    // 当前鼠标触发点距离body的左上角(页面第一屏幕的最左上端) IE8以下不兼容
    e.pageX=e.pageX|| (document.body || document.documentElement).scrollLeft + e.clientX;
    e.pageY=e.pageY|| (document.body || document.documentElement).scrollTop + e.clientX;
    console.log('距离页面第一屏幕的最左上端',e.pageX,e.pageY);

    // 阻止浏览器的默认行为 例如a 标签的跳转 IE8以下不兼容 ,需要的使用e.returnValue=false 来进行替代
    e.preventDefault?e.preventDefault : e.returnValuef=false;
    // 或者直接的
    // return false;
    // 停止冒泡传播
    e.stopPropagation?e.stopPropagation():e.cancelBubble();
}

oTxt.onkeyup=function(e){
    e=e||e.event;
    // 空格32 删除8 回车13 删除键 46 ← 37 ↑ 38 → 39 ↓ 40
    console.log(e.keyCode);
}