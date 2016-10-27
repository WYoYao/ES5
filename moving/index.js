
var box = document.querySelector('.box');
var minLeft = 0;
var maxLeft = (document.documentElement.clientWidth || document.body.clientWidth) - box.offsetWidth;
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');

var timer;
function moving(target){
    console.log('out',target);
    function _moving(){
        console.log('in',target);
        // clearInterval(timer);
        var left = parseInt(getComputedStyle(box).left);
        
        //←
        if (left > target) {
            if (left - 1 < target) {
                box.style.left = target + 'px';
                return;
            } else {
                box.style.left = left - 1 + 'px';
            }
        } else if (left < target) {
            //→
            if (left + 1 >= target) {
                box.style.left = target + 'px';
                return;
            } else {
                box.style.left = left + 1 + 'px';
            }
        }else{
            return;
        }
        // console.log('timer',target);
        timer = setTimeout(_moving, 10);
    };
    timer = setTimeout(_moving, 10);
}


btnLeft.onclick =function(){
     moving(minLeft)
};
btnRight.onclick = function(){
    moving(maxLeft)
};

