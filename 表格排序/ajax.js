
let ajax=(cb)=>{
    // 创建一个xml对象
    let xml=new XMLHttpRequest;
    // 请求方式 路径 是否异步
    xml.open('get','index.json',true);
    // 监听返回状态
    xml.onreadystatechange=()=>{
        if(xml.readyState===4 && /^2\d{2}$/.test(xml.status)){
            cb(xml.responseText);
        }
    }
    // 发送方法
    xml.send(null);
}