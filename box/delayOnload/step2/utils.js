let utils = {
    ajax: (cb) => {
        // 创建一个xml对象
        let xml = new XMLHttpRequest;
        // 请求方式 路径 是否异步
        xml.open('get', 'index.json', true);
        // 监听返回状态
        xml.onreadystatechange = () => {
            if (xml.readyState === 4 && /^2\d{2}$/.test(xml.status)) {
                cb(xml.responseText);
            }
        }
        // 发送方法
        xml.send(null);
    },
    getOffset: function (dom) {
        var result = {
            left: 0,
            top: 0
        };

        if (dom) {
            var parentOffset = dom.offsetParent;
            var oDom = dom;
            while (parentOffset) {
                if (oDom != dom && !/MSIE (6|7|8)/.test(window.navigator.userAgent)) {
                    result.left += oDom.clientLeft;
                    result.top += oDom.clientTop;
                }

                result.left += oDom.offsetLeft;
                result.top += oDom.offsetTop;
                oDom = oDom.offsetParent;
                parentOffset = oDom.offsetParent;
            }
        }

        return result;
    },
    win: function (attr, value) {
        if (typeof value == 'undefined') {
            //获取对应的值
            return document.documentElement[attr] || document.body[attr];
        }
        // 设置对应的属性值
        return document.documentElement[attr] = document.body[attr] = value;
    },
    getCSS: function (curEle, attr) {
        var result, reg;
        try {
            if (window.getComputedStyle) {
                result = window.getComputedStyle(curEle, null)[attr];
            } else {

                //兼容特殊样式属性
                if (attr == 'opacity') {
                    // 获取的IE下对应样式的值 
                    result = curEle['currentStyle']['filter'];
                    reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/i;
                    result = reg.test(result) ? reg.exec(result)[1] / 100 : void 0;
                }

                // 兼容的IE678
                result = curEle['currentStyle'][attr];
            }
        } catch (error) {
            return void 0;
        } finally {
            // 有的样式属性不能够去单位
            reg = /^(-?\d+(\.\d+)?)(px|pt|em|rem)?$/i;
            return reg.test(result) ? parseFloat(result) : result;
        }
    }
}