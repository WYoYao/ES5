
let box=document.querySelector('.box');
let minLeft=0;
let maxLeft=(document.documentElement.clientWidth || document.body.clientWidth)-box.offsetWidth;


let moving=(target)=>{
    let timer=setInterval(()=>{
        //←
        if(getComputedStyle(box).left>target){
            box.style.left=getComputedStyle(box).left-10;
        }else{
        //→
            box.style.left=getComputedStyle(box).left-10;
        }
    },10);
}