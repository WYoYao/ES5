
/**
 * 图片延时加载：（3s页面打不开就称为死亡页面）
 * 保证整个网页的打开速度,
 * 原理：
 *  1.对于首屏内容中的图片,首先给对应的区域一张默认非常小的图片占着固定的位置(默认图片需要非常小,一般最好维持在5kb以下,当首屏内容加载完成之后，再加载真实的图片.)
 *  2.对于其他屏幕中的图片:也是给一张对应的图片，当滚动条滚动到对应区域的时候，再开始加载真是的图片
 *  3.只对前两屏进行加载，绑定出来，后面的数据不进行任何的处理，当页面滚动到对应的区域的时候，我们从请求的数据然后渲染数据。
 */

let imgList = document.getElementsByTagName('img');

setTimeout(()=>{
    [].forEach.call(imgList,(item)=>{
        let src = item.getAttribute('data-src');
        // 如果获取的真实图片的地址是错误的，当赋值给img src 属性的时候，会控制台报错，同时会出现错误的图标，所以需要验证图片地址的有效性，当是真实有效的时候再进行赋值
        let oImage=new Image();//创建一个临时的Image标签
        oImage.src=src;

        //当图片能够正常加载的时候
        oImage.onload=function(){
            item.src=this.src;
            item.style.display='block';
        };
        oImage=null;
    })
},1000);