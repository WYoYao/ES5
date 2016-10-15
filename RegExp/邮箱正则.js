
// 邮箱正则简版

/**
 * 1. 492260726@qq.com
 * 2. leosmilence@163.com.cn
 * 3. wangying@jsj.cn
 * 4  game_over@163.com
 */

// 简单的邮箱正则 @ 前面没有做特别详细的处理
let reg=/^[\w.-]+@[0-9a-zA-Z]+(\.[a-zA-Z]{2,4}){1,2}$/;

/**
 * 1 ^[\w.-]+@  : @符前面的可以出现的数字字母下滑线多位
 * 2.[0-9a-zA-Z]+: @后面 .com 前面可以出现字母数字
 * 3.(\.[a-zA-Z]{2,4}){1,2} : .XXXX  2到4个字符可以出现一次到两次
 */
['492260726@qq.com','leosmilence@163.com.cn','wangying@jsj.cn','game_over@163.com'].map((item)=>reg.test(item))