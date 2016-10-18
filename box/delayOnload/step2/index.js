let imgList = document.getElementsByTagName('img');
let oList=document.getElementById('list');

//获取数据
let getData=(cb) => {
    let xhr = new XMLHttpRequest();
    // get请求的后面添加随机数清理缓存
    xhr.open('get', './data.json?_='+ Math.random(), true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState===4 && /^2\d{2}$/.test(xhr.status)){
            cb(JSON.parse(xhr.responseText));
        }
    }
    xhr.send(void 0);
}

// 加载图片
let ladyImage=(oImageDom)=>{
    // 判断如果加载过不再进行加载
    if(+oImageDom.getAttribute('hasLoad'))return;
    let oImage=new Image();
    oImage.src=oImageDom.getAttribute('data-str');
    oImage.onload=()=>{
        oImageDom.src=oImage.src;
        oImageDom.style.display='block';
        fadeIn(oImageDom);
    };
    // 设置已加载标记
    oImageDom.setAttribute('hasLoad',1);
}

// 渐现效果
let fadeIn=(dom)=>{
    let timer=setInterval(()=>{
        dom.style.opacity= utils.getCSS(dom,'opacity')+0.1;
        dom.style.filter='alpha(opacity='+ ( utils.getCSS(dom,'opacity')+10) +')';
        if( utils.getCSS(dom,'opacity')==1 ||  utils.getCSS(dom,'opacity')==100){
            clearInterval(timer);
        }
    },50);
}

// 判断当前位置的图片是否需要加载
let valiteImage=function(){
        [].forEach.call(this,(item)=>{
                if(!+item.getAttribute('hasLoad')){
                // 获取当前图片的底边是否已经完全显示的到的屏幕中
                // 因为上面的图片我们已经display:none 了 所以不能获取它对应的offsetHeight offsetTop ,我们可以直接获取其父边框的值来进行代替
                let top = utils.getOffset(item.parentNode).top+item.parentNode.offsetHeight;
                // 获取当前屏幕底边距离顶部的高度
                let screenTop=utils.win('scrollTop')+utils.win('clientHeight');
                // 进行延迟加载的操作
                if(screenTop>top){
                    ladyImage(item);
                }
            }
        })
    
}

// 绑定的懒加载的方法
let bindScroll=(cb)=>{
    window.onscroll=cb;
}

// 绑定HTML
let bindHtml=(list)=>{
    let html=[];
    list.reduce((content,item,index)=>{
        content.push('<li>');
		content.push('	<div><img data-str="'+ item.image +'" alt="'+item.HotelName+'"></div>');
		content.push('	<div>');
		content.push('	<h2>'+item.HotelName+'</h2>');
		content.push('	<p>'+item.HotelCircleName+'</p>');
		content.push('	<p>'+item.HotelAddress+'</p>');
		content.push('	</div>');
		content.push('</li>');
        return content;
    },html);

    oList.innerHTML=html.join('');

    setTimeout(valiteImage.bind(imgList),1000);
    bindScroll(valiteImage.bind(imgList));

    return html.join('');
}

; (() => {

    getData(bindHtml);

})();