


let str='2016-1-15 15:48:32';
let reg=/^(\d{4})-(\d{1,2})-(\d{1,2})\s(\d{1,2}):(\d{1,2}):(\d{1,2})$/g;

str=str.replace(reg,function (content,year,month,day,hour,Minute,second) {
    return [year,'年',month,'月',day,'日',' ',hour,'时',Minute,'分',second,'秒'].join('');
})

console.log(str);