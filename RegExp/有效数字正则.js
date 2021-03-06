

/**
 * 有效数字要求：
 * 1. .小数点可以出现也可以不出现，但是一旦出现，后面必须跟着一位或多位数字
 * 2. 最开始的+- 可以有也可以没有
 * 3. 整数部分，一位数可以是0-9之间，多位数的时候不能以0开头
 *  */ 

// 测试数组
let arr=['12.3','12','-12','+12','0.2']
let test=['0123','++123','123.','.123']
/**
 * ^[+-]? 可能以+-开头
 * (\d|([1-9]\d+)) 可以是0-9的一位数 或 1-9开头的多位数
 * (\.\d+) 可能出现小数点，一旦出现小数点，后面必须有一到多位数字
 *  */ 
let reg=/^[+-]?(\d|([1-9]\d+))(\.\d+)?$/;

test.map((item)=>reg.test(item))
arr.map((item)=>reg.test(item))
