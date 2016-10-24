

let oLi=document.getElementsByTagName('li'),oDiv=document.querySelectorAll('#box div');


let changTag=(n)=>{

    [].forEach.call(oLi,(item,index)=>{

        if(n==index){

            item.className='selected';
            oDiv[index].className='selected';
        }else{
            
            item.className=null;
            oDiv[index].className=null;
        }
    })
}

;(function(){

    [].forEach.call(oLi,(item,index)=>{
        item.onclick=changTag.bind(null,index);
    })

})();

