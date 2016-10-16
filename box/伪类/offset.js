

var getOffset=function(dom){
    var result={
        left:0,
        top:0
    };

    if(dom){
        var parentOffset= dom.offsetParent;
        var oDom=dom;
        while(parentOffset){
            console.log(!/MSIE (6|7|8)/.test(window.navigator.userAgent));
            if(oDom!=dom && !/MSIE (6|7|8)/.test(window.navigator.userAgent)){
                result.left+=oDom.clientLeft;
                result.top+=oDom.clientTop;
            }

            result.left+=oDom.offsetLeft;
            result.top+=oDom.offsetTop;
            oDom=oDom.offsetParent;
            parentOffset=oDom.offsetParent;
        }
    }

    return result;
}