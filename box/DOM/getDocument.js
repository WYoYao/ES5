

let children = (dom, elementType) => {

    if (Object.prototype.toString.call(elementType) == '[object String]') {

        return [...dom.childNodes].filter((item) => item.nodeType == 1 && item.tagName == elementType.toUpperCase());
    }

    return [...dom.childNodes].filter((item) => item.nodeType == 1);
}

let prev=(dom)=>{ 
    let prevNode=dom.previousSibling;
    while(prevNode.nodeType!=1 || !prevNode){
        prevNode=prevNode.previousSibling;
    }
    return prevNode;
}

let index=(dom)=>{
    let num=0;
    while(dom.previousSibling && dom.previousSibling.nodeType==1){
        num++;
    }
    return num;
}

/^banner|( +banner +)|banner$/i.test('bannaer odd');
/^banner|( +banner +)|banner$/i.test('odd basnner');
/^banner|( +banner +)|banner$/i.test('as badnner odd');

let hasClass=(dom,className)=>new RegExp('^'+ className +'|( +'+ className +' +)|'+ className +'$').test(dom.className);