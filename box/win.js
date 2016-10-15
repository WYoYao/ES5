
//编写一个兼容的浏览器窗口信息的方法
/**
 * attr 属性名
 * value 设置的值，如果为空表示获取对应的属性的值
 */
function win(attr, value) {
    if (typeof value == 'undefind') {
        //获取对应的值
        return document.documentElement[attr] || document.body[attr];
    }
    // 设置对应的属性值
    document.documentElement[attr] = document.body[attr] = value;
}

/**
 * 获取当前元素所有经过浏览器计算过的attr样式
 * curEle:当前要获取的样式的元素对象。
 * attr:我们要获取样式属性的名称。
 */
function getCSS(curEle, attr) {
    var result,reg;
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
