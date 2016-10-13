

let oTab=document.getElementById('tab');
let oThead=oTab.tHead;
let oThs=oThead.rows[0].cells;
let tBody=oTab.tBodies[0];
let oRows=tBody.rows;

// 1.获取JSON文件
ajax((data)=>bind(data));
// 2.实现数据绑定
let bind=(data)=>{

    data=JSON.parse(data);
    let ofrag=document.createDocumentFragment();
    data.forEach((item)=>{

        let oTr=document.createElement('tr');
        ofrag.appendChild(oTr);
        Object.keys(item).reduce((content,info)=>{

            let oTd=document.createElement('td');
            content.appendChild(oTd);
            if(info==='sex'){
                oTd.innerText=['女','男'][item[info]];
            }else{
                oTd.innerText=item[info];
            }
            oTd=null;
            return content;
        },oTr);
        oTr=null;
    })
    tBody.appendChild(ofrag);
    domSort();
    ofrag=null;
}

let domSort=()=>{
    [].forEach.call(oThs,(item,index)=>{
        let foc=false;
        item.onclick=()=>{
            foc=!foc;
            let ofrag=document.createDocumentFragment();
            let result = [].slice.call(oRows).sort((a,b)=>{
                let aText=a.cells[index].innerText;
                let bText=b.cells[index].innerText;
                if(Object.prototype.toString.call(valiteType(aText))==='[object String]')return foc?aText.localeCompare(bText):bText.localeCompare(aText);
                if(Object.prototype.toString.call(valiteType(aText))==='[object Number]')return foc?parseFloat(aText)-parseFloat(bText):parseFloat(bText)-parseFloat(aText);
            }).reduce((content,info)=>{
                content.appendChild(info);
                return content;
            },ofrag);
            
            tBody.appendChild(result);
        }
    })
}

let valiteType=(str)=>{
    // 验证数字
    if(/^[0-9]*$/.test(str))return 0;
    // 验证汉字 字母
    if(/^[\u4E00-\u9FFF]+$/.test(str) || /^[A-Za-z]+$/.test(str)) return '';
}