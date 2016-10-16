let olink=document.getElementById('golink');

/**
 * totalTime 总共的返回的时间 默认500ms
 * step 每秒移动的距离 默认10px;
 */
let goTop=(totalTime=500,step=100)=>{
    console.log(this);
    //获取当前滚动轴的高度
    let totalTop=(document.documentElement.scrollTop|| document.body.scrollTop);
    let everyTime=500/(totalTop/100);

    let timer = setInterval(()=>{
        document.documentElement.scrollTop-=step;
        document.body.scrollTop-=step;
        if((document.documentElement.scrollTop|| document.body.scrollTop)==0){
            clearInterval(timer);
        }
    },Math.floor(everyTime))
}

let goShow=()=>{
    
}

window.onscroll=()=>{
    olink.style.display=(document.documentElement.scrollTop|| document.body.scrollTop)>(document.documentElement.clientHeight|| document.body.clientHeight)?'block':'none';
}

olink.onclick=goTop;