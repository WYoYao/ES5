;(function(){

    let getData=(cb)=>{
        let req=new XMLHttpRequest;
        req.open('get','./data.json?_='+Math.random(),true);
        req.onreadystatechange=()=>{
            if(req.readyState===4 && /^2\d{2}$/.test(req.status)){
                cb(JSON.parse(req.responseText));
            }
        }
        req.send(null);
    }

    let _bindHtml=(obj=[])=>{
        let oImgList = document.getElementById('imgList');
        let oLiList=document.getElementById('liList');
        let oBannerImage=document.querySelector('.banner .bannerImage');

        let result={
            imgHtml:[],
            ulHtml:[],
        };

        obj.reduce((content,item,index)=>{

            content['imgHtml'].push('<img data-src="'+ item.imgUrl +'" alt="'+ item.title +'">');
            if(index===0){
                content['ulHtml'].push('<li class="select"></li>');
            }else{
                content['ulHtml'].push('<li></li>');
            }
            return content;

        },result);
        oImgList.innerHTML=result.imgHtml.join('');
        oLiList.innerHTML=result.ulHtml.join('');
        oBannerImage.style.width=result.imgHtml.length*1200 +'px';

       _bindEvent();

    }

    let _loadImages=(imgList)=>{
        imgList.forEach(function(item){
            let src=item.getAttribute('data-src');
            let img=new Image;
            img.src=src;
            img.onload=()=>{
                item.src=src;
                let timer = setInterval(()=>{
                    if(getComputedStyle(item).opacity==1){
                        clearInterval(timer);
                        return;
                    }
                    item.style.opacity=item.style.opacity?parseFloat(item.style.opacity)+0.1:0.1;
                },50)
            }
        })
    }

    let _bindEvent=()=>{
        // 绑定图片'
        _loadImages([].slice.call(document.getElementById('imgList').getElementsByTagName('img')));
        //
    }
    getData(_bindHtml);


})();